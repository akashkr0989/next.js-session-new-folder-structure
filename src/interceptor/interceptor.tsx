"use client";
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";

type InternalAxiosRequestConfig<T = any> = AxiosRequestConfig<T> & {
  headers?: AxiosRequestHeaders;
};

const applyInterceptor = (axiosInstance: AxiosInstance) => {
  
  let access_token: string | null;
  if (typeof window !== "undefined" && localStorage.getItem("access_token")) {
    access_token = localStorage.getItem("access_token");
  }
  // Request interceptor
  axiosInstance.interceptors.request.use(
    (config: any) => {
      // Add headers, authentication, or any common configurations here

      // Here we can add headers like token if required , Basic Auth etc

      config.headers.Authorization = `Bearer ${access_token}`;
      return config;
    },
    (error: AxiosError) => {
      // Handle request error
      return Promise.reject(error);
    }
  );

  // Response Interceptor
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      // Modify response data if needed
      return response;
    },
    (error: AxiosError) => {
      // Handle response error
      if (error.response) {
        const { status } = error.response;
        if (status === 401) {
          localStorage.clear();
          window.location.href = "/auth/login";
        } else if (status === 500) {
          alert("Internal Server Error");
        }
      }
      return Promise.reject(error);
    }
  );
};

export default applyInterceptor;
