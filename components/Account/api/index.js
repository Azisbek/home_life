import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { baseURL } from "../../../services/api/client";

export const accountApi = createApi({
  reducerPath: "account",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (user) => ({
        url: "/users/register/",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useSignUp } = accountApi;
