import axios from "axios";

const API_KEY = import.meta.env.REACT_APP_LABTECH_API;

const configHttp = {
  baseURL: API_KEY,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
};

const client = axios.create(configHttp);

export default client;