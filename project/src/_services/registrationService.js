import Axios from "axios";
import { AxiosService } from "./Axios.service";



const _axiosService = new AxiosService();
export const registerUser = async (userData) => {
   const response = await _axiosService
      .getAxiosInstance()
      .post("https://localhost:5143/api/Registration/register", userData);

   return response;
}







