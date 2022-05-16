import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const TOKEN = process.env.REACT_APP_API_TOKEN;

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
});

export const getRequest = async (url: string) => {
  const res = instance
    .get(url, {
      withCredentials: true,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return res;
};

export const newRequest = async (url: string) => {
  fetch(`${API_URL}${url}`, {
    headers: new Headers({
      Accept: "application/json",
      Auhorization: "Bearer  ".concat(`${TOKEN}`),
    }),
  })
    .then((response) => response.json())
    .then((json) => console.log("Response", json))
    .catch((error) => {
      console.log(error);
    });
};

export const Api = {
  getRequest,
  newRequest,
};
