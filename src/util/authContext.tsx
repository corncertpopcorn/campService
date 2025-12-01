// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import apiService from "./apiService";
import {
  getAccessToken,
  setAccessToken,
  clearAuthData,
  isAuthenticated,
  decodeToken,
} from "./tokenUtils";

// 사용자 정보 타입
interface User {
  idx: string;
  nickname: string;
  email: string;
  role?: string;
}

// 인증 컨텍스트 타입
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (
    username: string,
    email: string,
    password: string
  ) => Promise<void>;
}

// 기본값 생성
const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  isLoggedIn: false,
  login: async () => {},
  logout: () => {},
  register: async () => {},
});

// 인증 컨텍스트 제공자 컴포넌트
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  // 토큰에서 사용자 정보 추출
  const getUserFromToken = (token: string): User | null => {
    const payload = decodeToken(token);
    if (!payload) return null;

    return {
      idx: payload.sub || payload.idx,
      nickname: payload.nickname || "",
      email: payload.email || "",
      role: payload.role || "user",
    };
  };

  // 사용자 정보 로드
  const loadUser = async () => {
    setIsLoading(true);
    try {
      const token = getAccessToken();

      if (token && isAuthenticated()) {
        // 토큰에서 기본 정보 추출
        const userData = getUserFromToken(token);

        // 필요한 경우 API에서 추가 정보 가져오기
        // const response = await apiService.get<User>('/auth/me');
        // setUser(response.data);

        setUser(userData);
        setIsLoggedIn(true);
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("User loading failed:", error);
      setUser(null);
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  };

  // 컴포넌트 마운트 시 사용자 정보 로드
  useEffect(() => {
    loadUser();
  }, []);

  // 로그인 함수
  const login = async (userId: string, userPw: string): Promise<void> => {
    try {
      const response = await apiService.login(userId, userPw);
      const { accessToken } = response.data;
      const from = location.state?.from || `/`;
      setAccessToken(accessToken);

      // 사용자 정보 로드
      await loadUser();

      // 로그인 성공 후 리디렉션 (선택적)
      navigate(from);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  // 로그아웃 함수
  const logout = (): void => {
    // 백엔드에 로그아웃 요청 (선택적)
    apiService
      .post("/auth/logout")
      .catch((error) => console.error("Logout API error:", error));

    // 로컬 상태 및 저장소 정리
    clearAuthData();
    setUser(null);
    setIsLoggedIn(false);

    // 로그인 페이지로 리디렉션 (선택적)
    navigate("/login");
  };

  // 회원가입 함수
  const register = async (
    username: string,
    email: string,
    password: string
  ): Promise<void> => {
    try {
      await apiService.post("/auth/register", {
        username,
        email,
        password,
      });

      // 회원가입 성공 후 로그인 페이지로 이동 (선택적)
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  };

  const value = {
    user,
    isLoading,
    isLoggedIn,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// 인증 컨텍스트 사용을 위한 훅
export const useAuth = () => useContext(AuthContext);

export default AuthContext;
