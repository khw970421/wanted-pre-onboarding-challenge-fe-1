import { authAxios, todosAxios } from "./axios-setting";

export const postSignin = async (userData) => {
  return authAxios.post("/users/login", userData).then((response) => {
    return response?.data?.token;
  });
};

export const postSignup = async (userData) => {
  return authAxios.post("/users/create", userData).then((response) => {
    return response?.data?.token;
  });
};
