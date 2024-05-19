import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/";

export const clientApi = axios.create({
  baseURL: "/api/",
});
export const serverApi = axios.create({
  baseURL: baseURL,
  withCredentials: false,
});
