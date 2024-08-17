import axios from "axios";

const baseURL = "";
// const baseURL = "https://homelife.onrender.com/";

export const clientApi = axios.create({
  baseURL: "/api/",
});

export const serverApi = axios.create({
  baseURL: baseURL,
  withCredentials: false,
});
