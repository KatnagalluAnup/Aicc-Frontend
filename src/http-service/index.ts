import axios from "axios";

declare module "axios" {
    // eslint-disable-next-line no-unused-vars
    interface AxiosRequestConfig {
      handlerEnabled: boolean;
    }
  }

  export const http = (req = null) => {
    // const token = localStorage.getItem("access_token");
    const http = axios.create({
      baseURL: "http://127.0.0.1:3000",
      timeout: 500000,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "*/*",
      },
      handlerEnabled: true,
    });
  
    return http;
  };