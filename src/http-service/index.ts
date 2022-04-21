import axios from "axios";

declare module "axios" {
  // eslint-disable-next-line no-unused-vars
  interface AxiosRequestConfig {
    handlerEnabled: boolean;
  }
}

export const http = (req = null) => {
  const token = localStorage.getItem("access_token");
  const http = axios.create({
    baseURL: `${process.env.REACT_APP_PUBLIC_BACKEND_URL}`,
    timeout: 500000,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
    handlerEnabled: true,
  });

  return http;
};
