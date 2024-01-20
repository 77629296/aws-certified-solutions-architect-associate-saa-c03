import { useMutation, UseMutationResult } from "@tanstack/react-query";

import { axios, AxiosResponseOriginal } from "@/libs/axios";
import { queryClient } from "@/libs/query-client";
import { useAuthStore } from "@/store/useAuthStore";

export const logout = (): Promise<AxiosResponseOriginal<void>> => axios.post("/auth/logout");

export const useLogout = (): {
  logout: () => Promise<void>;
  loading: boolean;
  error: unknown;
} => {
  const setUser = useAuthStore((state) => state.setUser);
  const mutation: UseMutationResult<void, unknown, void> = useMutation<void, unknown>({
    mutationFn: async () => {
      const response = await logout();

      return response.data;  // 这里我们只关心数据部分
    },
    onSuccess: () => {
      setUser(null);
      queryClient.setQueryData(["user"], null);
    },
    onError: () => {
      setUser(null);
      queryClient.setQueryData(["user"], null);
    },
  });

  return {
    logout: mutation.mutateAsync,
    loading: mutation.isPending,
    error: mutation.error
  };
};
