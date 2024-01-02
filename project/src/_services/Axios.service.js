import Axios from "axios";

export class AxiosService {
  _axiosInstance = null;

  getAxiosInstance() {
    if (this._axiosInstance != null) {
      return this._axiosInstance;
    }

    this._axiosInstance = Axios.create({
      baseURL: "",
      timeout: 30000,
  });

    // Add a request interceptor
    this._axiosInstance.interceptors.request.use(
      function (config) {
        // Do something before request is sent

        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    this._axiosInstance.interceptors.response.use(
      function (response) {
        // Do something with response data
        console.log(response);
        return response.data;
      },
      function (error) {
        // Do something with response error
        return Promise.reject(error);
      }
    );

    return this._axiosInstance;
  }

}
