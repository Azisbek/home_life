import { apiSlice } from "../../../store/api";

export const accountApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation({
      query: (data) => ({
        url: "/users/register/",
        method: "POST",
        body: data,
      }),
    }),
    signIn: build.mutation({
      query: (data) => ({
        url: "/users/login/",
        method: "POST",
        body: data,
      }),
    }),
    getMe: build.mutation({
      query: () => ({
        url: "/users/me/",
        method: "GET",
      }),
    }),
    refresh: build.mutation({
      query: (body) => ({
        url: "/users/logout/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation, useGetMeMutation } =
  accountApi;
