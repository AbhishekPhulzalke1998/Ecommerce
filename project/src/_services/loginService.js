import Axios from "axios";
import { AxiosService } from "./Axios.service";


const _axiosService = new AxiosService();
export const loginUser = async (userData) => {
    const response = await _axiosService
        .getAxiosInstance()
        .post("", userData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

    return response;
}