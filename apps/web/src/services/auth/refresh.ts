import { AxiosInstance, AxiosResponse } from "axios";

interface MessageDto {
  message: string
}

export const refresh = async (axios: AxiosInstance): Promise<MessageDto> => {
  const response: AxiosResponse<MessageDto> = await axios.post<MessageDto, AxiosResponse<MessageDto>>("/auth/refresh");

  return response.data;
};
