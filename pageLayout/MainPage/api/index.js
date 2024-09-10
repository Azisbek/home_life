import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "../../../store/api";

export const mainAPi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getMainPage: build.query({
      query: () => ({
        url: "/product/homepage/",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMainPageQuery } = mainAPi;
