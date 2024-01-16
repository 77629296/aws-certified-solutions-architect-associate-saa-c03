import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

import { axios } from "@/libs/axios";
import { queryClient } from "@/libs/query-client";
import { useAuthStore } from "@/store/useAuthStore";

interface LoginDto {
  userName: string
  password: string
}

interface AuthResponseDto {
  status: number
  user: {
    userName: string
    email: string
  }
}

export const login = async (data: LoginDto) => {
  const response = await axios.post<AuthResponseDto, AxiosResponse<AuthResponseDto>, LoginDto>(
    "/auth/login",
    data,
  );

  return response.data;
};

export const useLogin = () => {
  const setUser = useAuthStore((state) => state.setUser);

  const {
    error,
    isPending: loading,
    mutateAsync: loginFn,
  } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setUser(data.user);
      queryClient.setQueryData(["user"], data.user);
    },
  });

  return { login: loginFn, loading, error };
};
