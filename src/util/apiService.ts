// src/api/apiService.ts
import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosHeaders,
} from "axios";
import {
  getAccessToken,
  setAccessToken,
  clearAuthData,
  getRefreshToken,
  setRefreshToken,
  getUserIdx,
  setUserIdx,
  decodeToken,
} from "./tokenUtils";
import { baseUrl } from "./serverSetting";

// API 응답 타입 정의
interface ApiResponse<T = any> {
  data: T;
  message?: string;
  status: number;
}

// 리프레시 토큰 응답 타입
interface RefreshTokenResponse {
  accessToken: string;
  message?: string;
}

// 확장된 에러 인터페이스
export interface ApiError {
  status: number;
  message: string;
  data?: any;
  isAxiosError: boolean;
  originalError?: any;
}

class ApiService {
  private api: AxiosInstance;
  private isRefreshing = false;
  private refreshSubscribers: Array<(token: string) => void> = [];

  constructor(baseURL: string) {
    this.api = axios.create({
      baseURL,
      withCredentials: true, // 쿠키 전송을 위해 필요
      timeout: 10000,
    });

    this.setupInterceptors();
  }

  // 에러 처리를 위한 헬퍼 메소드
  private handleError(error: any): ApiError {
    // Axios 에러인 경우
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      return {
        status: axiosError.response?.status || 500,
        message:
          // 서버가 응답한 메시지가 있는 경우
          typeof axiosError.response?.data === "object" &&
          axiosError.response?.data &&
          "message" in axiosError.response.data
            ? String(axiosError.response.data.message)
            : // 서버가 응답한 문자열이 있는 경우
            typeof axiosError.response?.data === "string"
            ? axiosError.response.data
            : // 기본 에러 메시지
              axiosError.message || "서버와 통신 중 오류가 발생했습니다.",
        data: axiosError.response?.data,
        isAxiosError: true,
        originalError: axiosError,
      };
    }
    // 비즈니스 로직에서 발생한 에러인 경우
    else if (error instanceof Error) {
      return {
        status: 400, // 기본값
        message: error.message || "알 수 없는 오류가 발생했습니다.",
        isAxiosError: false,
        originalError: error,
      };
    }
    // 그 외 모든 경우
    else {
      return {
        status: 500,
        message: "알 수 없는 오류가 발생했습니다.",
        isAxiosError: false,
        originalError: error,
      };
    }
  }

  private setupInterceptors(): void {
    // 요청 인터셉터
    this.api.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token = getAccessToken();
        if (token) {
          // TypeScript 타입 안전성을 위한 명시적 처리
          const headers = config.headers as AxiosHeaders;
          headers.set("Authorization", `${token}`);
        }

        // FormData가 아닌 경우에만 Content-Type 설정
        if (config.data && !(config.data instanceof FormData)) {
          const headers = config.headers as AxiosHeaders;
          if (!headers.has("Content-Type")) {
            headers.set("Content-Type", "application/json");
          }
        }

        return config;
      },
      (error: AxiosError) => Promise.reject(this.handleError(error))
    );

    // 응답 인터셉터
    this.api.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & {
          _retry?: boolean;
        };

        // 401 에러 처리 (인증 실패)
        if (
          error.response?.status === 401 &&
          originalRequest &&
          !originalRequest._retry
        ) {
          // 이미 리프레시 진행 중인지 확인
          if (this.isRefreshing) {
            return new Promise<AxiosResponse>((resolve) => {
              this.addRefreshSubscriber((token: string) => {
                // 토큰 갱신 후 원래 요청의 헤더 업데이트
                const headers = originalRequest.headers as AxiosHeaders;
                headers.set("Authorization", `${token}`);
                resolve(this.api(originalRequest));
              });
            });
          }

          // 리프레시 플래그 설정
          this.isRefreshing = true;
          originalRequest._retry = true;

          try {
            // 사용자 IDX 가져오기
            const userIdx = getUserIdx(); // 이 함수는 tokenUtils에 추가 필요
            const refreshToken = getRefreshToken(); // 이 함수도 tokenUtils에 추가 필요

            if (!refreshToken || !userIdx) {
              throw new Error("리프레시 토큰 또는 사용자 IDX가 없습니다.");
            }

            // 리프레시 토큰으로 새 액세스 토큰 요청
            const response = await axios.post(
              `${this.api.defaults.baseURL}/refresh`, // 백엔드 엔드포인트와 일치시킴
              {},
              {
                headers: {
                  AuthorizationRefresh: refreshToken,
                  idx: userIdx,
                },
                withCredentials: true,
              }
            );

            // 응답에서 새 토큰 추출
            const newAccessToken = response.headers["authorization"];
            const newRefreshToken = response.headers["authorizationrefresh"];

            // 새 토큰 저장
            if (newAccessToken) setAccessToken(newAccessToken);
            if (newRefreshToken) setRefreshToken(newRefreshToken);

            // 대기 중인 요청들에 새 토큰 전달
            this.onRefreshed(newAccessToken);

            // 리프레시 상태 초기화
            this.isRefreshing = false;

            // 원래 요청 헤더 업데이트
            const headers = originalRequest.headers as AxiosHeaders;
            headers.set("Authorization", `${newAccessToken}`);

            // 원래 요청 재시도
            return this.api(originalRequest);
          } catch (refreshError) {
            // 리프레시 실패 시 로그아웃 처리
            this.isRefreshing = false;
            clearAuthData();

            // 로그인 페이지로 리디렉션 (선택적)
            window.location.href = "/login";
            return Promise.reject(this.handleError(refreshError));
          }
        }

        // 다른 에러는 표준화된 형식으로 변환하여 반환
        return Promise.reject(this.handleError(error));
      }
    );
  }

  // 리프레시 토큰 갱신 시 대기 중인 요청들을 처리하는 함수
  private onRefreshed(token: string): void {
    this.refreshSubscribers.forEach((callback) => callback(token));
    this.refreshSubscribers = [];
  }

  // 리프레시 토큰 갱신 대기열에 콜백 추가
  private addRefreshSubscriber(callback: (token: string) => void): void {
    this.refreshSubscribers.push(callback);
  }

  // GET 요청
  public async get<T = any>(
    url: string,
    config?: InternalAxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.get<T>(url, config);
      return {
        data: response.data,
        status: response.status,
        message: response.statusText,
      };
    } catch (error) {
      // 표준화된 에러 형식으로 변환하여 throw
      throw this.handleError(error);
    }
  }

  // POST 요청
  public async post<T = any>(
    url: string,
    data?: any,
    config?: InternalAxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.post<T>(url, data, config);
      return {
        data: response.data,
        status: response.status,
        message: response.statusText,
      };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // POST FormData 요청
  public async postFormData<T = any>(
    url: string,
    formData: FormData,
    config?: InternalAxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      // 새로운 axios 인스턴스로 요청 (기본 설정 영향 받지 않도록)
      const response = await axios.post<T>(
        `${this.api.defaults.baseURL}${url}`,
        formData,
        {
          headers: {
            Authorization: getAccessToken() || "",
            // Content-Type은 명시적으로 설정하지 않음
          },
          withCredentials: true,
        }
      );

      return {
        data: response.data,
        status: response.status,
        message: response.statusText,
      };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // PUT FormData 요청
  public async putFormData<T = any>(
    url: string,
    formData: FormData,
    config?: InternalAxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      // FormData를 위한 설정
      const formDataConfig: InternalAxiosRequestConfig = {
        ...config,
        headers: new AxiosHeaders(config?.headers),
      };

      // Content-Type 제거 (브라우저가 자동으로 설정하게 함)
      formDataConfig.headers.delete("Content-Type");

      const response = await this.api.put<T>(url, formData, formDataConfig);
      return {
        data: response.data,
        status: response.status,
        message: response.statusText,
      };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // PUT 요청
  public async put<T = any>(
    url: string,
    data?: any,
    config?: InternalAxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.put<T>(url, data, config);
      return {
        data: response.data,
        status: response.status,
        message: response.statusText,
      };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // PATCH 요청
  public async patch<T = any>(
    url: string,
    data?: any,
    config?: InternalAxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.patch<T>(url, data, config);
      return {
        data: response.data,
        status: response.status,
        message: response.statusText,
      };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // DELETE 요청
  public async delete<T = any>(
    url: string,
    config?: InternalAxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.delete<T>(url, config);
      return {
        data: response.data,
        status: response.status,
        message: response.statusText,
      };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async login(
    userId: string,
    userPw: string
  ): Promise<ApiResponse<{ accessToken: string }>> {
    try {
      const credentials = btoa(`${userId}:${userPw}`);
      const response = await this.api.post<{ accessToken: string }>(
        "/login",
        {},
        {
          headers: {
            userId: userId,
            userPw: userPw,
          },
        }
      );
      // 응답 헤더에서 토큰 추출
      const accessToken = response.headers["authorization"];
      const refreshToken = response.headers["authorizationrefresh"];

      // 토큰 저장
      if (accessToken) {
        setAccessToken(accessToken);

        // 사용자 IDX 저장 (필요하다면)
        const decodedToken = decodeToken(accessToken);
        if (decodedToken && decodedToken.idx) {
          setUserIdx(decodedToken.idx.toString());
        }
      }
      if (refreshToken) setRefreshToken(refreshToken);

      // 사용자 IDX 저장 (필요하다면)
      const decodedToken = decodeToken(accessToken);
      if (decodedToken && decodedToken.idx) {
        localStorage.setItem("userIdx", decodedToken.idx.toString());
      }

      return {
        data: { accessToken: accessToken || "" },
        status: response.status,
        message: response.statusText,
      };
    } catch (error) {
      throw this.handleError(error);
    }
  }
}

// API 서비스 인스턴스 생성 및 내보내기
//const apiService = new ApiService(process.env.REACT_APP_API_URL || baseUrl);
const apiService = new ApiService("/admin");
export default apiService;
