import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api";
import { accountSlice } from "../../components/Account/model/accountSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [accountSlice.name]: accountSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
