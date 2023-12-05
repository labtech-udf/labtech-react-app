import axios from "axios";

const baseURL = import.meta.env.VITE_LABTECH_API_BASEURL;

export function sleep(ms = 500) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const httpClient = axios.create({
  baseURL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});


httpClient.interceptors.request.use(async config => {
  const accessToken = localStorage.getItem("labtech:accessToken");

  if (accessToken) {
    config.headers.Authorization = `Bearer ${JSON.parse(accessToken)}`;
  }

  return config;
});

httpClient.interceptors.response.use(async data => {
  await sleep(500);

  return data;
});
