import { createSlice } from "@reduxjs/toolkit";
import tokenStorageService from "../../../lib/TokenStorage";

const initialState = {};

export const accoutSlice = createSlice({
  name: "accountSlice",
  initialState: initialState,
  reducers: {
    logOutUser() {
      tokenStorageService.clearToken();
    },
  },
  extraReducers() {},
});
