import { AxiosService } from "./Axios.service";
const _axiosService = new AxiosService();

export const AuthenticateUser = async (user) => {

  const response = await _axiosService
    .getAxiosInstance()
    .post("", user);

  return response;
};
