import axios from "axios";

const baseURL = import.meta.env.VITE_LABTECH_API_BASEURL;

const configHttp = {
  baseURL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
};

export const HttpService = axios.create(configHttp);


