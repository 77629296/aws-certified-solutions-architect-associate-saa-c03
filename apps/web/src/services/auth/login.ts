import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

import { axios } from "@/libs/axios";
import { queryClient } from "@/libs/query-client";
import { useAuthStore } from "@/store/useAuthStore";

interface LoginDto {
  userName: string;
  password: string;
}

interface AuthResponseDto {
  status: number;
  user: {
    userName: string;
    email: string;
  };
}

export const login = async (data: LoginDto): Promise<AuthResponseDto> => {
  const response: AxiosResponse<AuthResponseDto> = await axios.post<AuthResponseDto, AxiosResponse<AuthResponseDto>, LoginDto>(
    "/auth/login",
    data,
  );

  return response.data;
};

export const useLogin = (): {
  login: (data: LoginDto) => Promise<AuthResponseDto>;
  loading: boolean;
  error: unknown;
} => {
  const setUser = useAuthStore((state) => state.setUser);

  const mutation: UseMutationResult<AuthResponseDto, unknown, LoginDto> = useMutation<AuthResponseDto, unknown, LoginDto>({
    mutationFn: login,
    onSuccess: (data) => {
      setUser(data.user);
      queryClient.setQueryData(["user"], data.user);
    },
  });

  return {
    login: mutation.mutateAsync,
    loading: mutation.isPending,
    error: mutation.error
  };
};
