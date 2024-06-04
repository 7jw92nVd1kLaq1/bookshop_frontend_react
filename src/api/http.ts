import axios, {AxiosRequestConfig} from "axios";


const BASE_URL = "http://localhost:3000";
const DEFAULT_TIMEOUT = 10000;

export const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    ...config,
  });

  axiosInstance.interceptors.request.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response?.status === 401) {
        // redirect to login page
        window.location.href = "/login"; 
        return
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
}

export const httpClient = createClient();