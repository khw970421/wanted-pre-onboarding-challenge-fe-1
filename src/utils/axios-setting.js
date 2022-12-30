import axios from "axios";
import { getLocalStorageToken } from "./local-storage-fn";

const baseURL = "http://localhost:8080";
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

export const authAxios = axios.create({
  baseURL,
  headers,
});

authAxios.interceptors.request.use((config) => {
  return config;
});

authAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { response } = error;
    alert(response.data.details);
  }
);

export const todosAxios = axios.create({
  baseURL,
  headers,
});

todosAxios.interceptors.request.use((config) => {
  const accessToken = getLocalStorageToken();
  if (accessToken && config.headers) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

todosAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { response } = error;
    const { request } = error;
    console.log(response);
  }
);
