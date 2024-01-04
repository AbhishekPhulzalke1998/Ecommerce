import Axios from "axios";
import { AxiosService } from "./Axios.service";


const _axiosService = new AxiosService();
export const registerUser = async (userData) => {
   const response = await _axiosService
      .getAxiosInstance()
      .post("https://localhost:7236/api/Registartion/register", userData, {
         
      });

   return response;
}







