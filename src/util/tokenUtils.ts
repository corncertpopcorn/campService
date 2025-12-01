// src/utils/tokenUtils.ts

/**
 * JWT 토큰 관련 유틸리티 함수
 */

// 액세스 토큰 저장소 키
const ACCESS_TOKEN_KEY = "accessToken";

// 액세스 토큰 가져오기
export const getAccessToken = (): string | null => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

// 액세스 토큰 저장하기
export const setAccessToken = (token: string): void => {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

// 액세스 토큰 삭제하기
export const removeAccessToken = (): void => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};

// 모든 인증 관련 데이터 삭제 (로그아웃 시 사용)
export const clearAuthData = (): void => {
  removeAccessToken();
  removeRefreshToken();
  removeUserIdx();
};
// JWT 토큰 디코딩 (페이로드만 추출)
export const decodeToken = (token: string | null | undefined): any => {
  if (!token) {
    return null;
  }

  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const payload = JSON.parse(window.atob(base64));
    return payload;
  } catch (error) {
    console.error("Token decoding failed:", error);
    return null;
  }
};

// 토큰 만료 여부 확인
export const isTokenExpired = (token: string): boolean => {
  const payload = decodeToken(token);
  if (!payload || !payload.exp) return true;

  // 현재 시간(초)과 만료 시간 비교
  const currentTime = Math.floor(Date.now() / 1000);
  return payload.exp < currentTime;
};

// 현재 로그인 상태인지 확인
export const isAuthenticated = (): boolean => {
  const token = getAccessToken();
  return token !== null && !isTokenExpired(token);
};

// 리프레시 토큰 저장소 키
const REFRESH_TOKEN_KEY = "refreshToken";

// 리프레시 토큰 가져오기
export const getRefreshToken = (): string | null => {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
};

// 리프레시 토큰 저장하기
export const setRefreshToken = (token: string): void => {
  localStorage.setItem(REFRESH_TOKEN_KEY, token);
};

// 리프레시 토큰 삭제하기
export const removeRefreshToken = (): void => {
  localStorage.removeItem(REFRESH_TOKEN_KEY);
};

// 사용자 IDX 저장소 키
const USER_IDX_KEY = "userIdx";

// 사용자 IDX 가져오기
export const getUserIdx = (): string | null => {
  return localStorage.getItem(USER_IDX_KEY);
};

// 사용자 IDX 저장하기
export const setUserIdx = (idx: string): void => {
  localStorage.setItem(USER_IDX_KEY, idx);
};

// 사용자 IDX 삭제하기
export const removeUserIdx = (): void => {
  localStorage.removeItem(USER_IDX_KEY);
};
