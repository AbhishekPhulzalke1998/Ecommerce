
import AxiosService from './services/AxiosService';

const _axiosService = new AxiosService();

export const AuthenticateUser = async (user) => {

  const response = await _axiosService
    .getAxiosInstance()
    .post(Urls.User.AuthenticateUser, user);

  return response;
};
