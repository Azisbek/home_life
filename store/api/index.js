import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../services/api/client";
import tokenStorageService from "../../lib/TokenStorage";

export const $baseQuery = fetchBaseQuery({
  baseUrl: baseURL,
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = tokenStorageService.getToken();
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    } else {
      console.log("Токен отсутствует");
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: $baseQuery,
  keepUnusedDataFor: 0,
  endpoints: () => ({}),
});
