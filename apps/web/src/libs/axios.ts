import _axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { redirect } from "react-router-dom";

import { USER_KEY } from "@/constants/query-keys";
import { refresh } from "@/services/auth/refresh";

import { queryClient } from "./query-client";

export type ServerError = {
  statusCode: number;
  message: string;
  error: string;
};

export const axios = _axios.create({ baseURL: "/api", withCredentials: true });

// Intercept responses to transform ISO dates to JS date objects
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const message = error.response?.data.message;
    console.error(message)

    return Promise.reject(error);
  },
);

// Create another instance to handle failed refresh tokens
// Reference: https://github.com/Flyrell/axios-auth-refresh/issues/191
const axiosForRefresh = _axios.create({ baseURL: "/api", withCredentials: true });

// Interceptor to handle expired access token errors
const handleAuthError = async () => {
  try {
    await refresh(axiosForRefresh);

    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

// Interceptor to handle expired refresh token errors
const handleRefreshError = async () => {
  try {
    queryClient.invalidateQueries({ queryKey: USER_KEY });
    redirect("/auth/login");

    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

// Intercept responses to check for 401 and 403 errors, refresh token and retry the request
createAuthRefreshInterceptor(axios, handleAuthError, { statusCodes: [401, 403] });
createAuthRefreshInterceptor(axiosForRefresh, handleRefreshError);
