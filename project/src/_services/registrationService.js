import { AxiosService } from "./Axios.service";

const _axiosService = new AxiosService();
export const registerUser = async (userData) => {
   const response = await _axiosService
      .getAxiosInstance()
      .post(Urls.User.AuthenticateUser, userData, {
         headers: {
            "Content-Type": "multipart/form-data",
         },
      });
 
   return response;
}







