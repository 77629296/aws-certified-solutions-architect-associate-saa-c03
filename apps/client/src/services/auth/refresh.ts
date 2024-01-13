import { AxiosInstance, AxiosResponse } from "axios";

interface MessageDto {
  message: string
}

export const refresh = async (axios: AxiosInstance) => {
  const response = await axios.post<MessageDto, AxiosResponse<MessageDto>>("/auth/refresh");

  return response.data;
};
