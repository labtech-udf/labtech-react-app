import axios from "axios";

const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

const configHttp = {
  baseURL: API_KEY,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
};

const client = axios.create(configHttp);

export default client;
