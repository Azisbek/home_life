import axios from "axios";

export const baseURL = "https://home-life.onrender.com/";
// const baseURL = "https://homelife.onrender.com/";

export const clientApi = axios.create({
  baseURL: "/api/",
});

export const serverApi = axios.create({
  baseURL: baseURL,
  withCredentials: false,
});
