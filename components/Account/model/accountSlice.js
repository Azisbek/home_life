import { createSlice } from "@reduxjs/toolkit";
import tokenStorageService from "../../../lib/TokenStorage";
import { accountApi } from "../api";
import { apiSlice } from "../../../store/api";

const user = {
  first_name: "",
  last_name: "",
  gender: 0,
  age: 0,
  email: "",
  username: "",
  number: 0,
  wholesaler: false,
};

const initialState = {
  user,
};

export const actionSetUser = (state, action) => {
  const { payload } = action;
  state.user = {
    first_name: payload.first_name || "",
    last_name: payload.last_name || "",
    gender: payload.gender || "",
    wholesaler: payload.wholesaler,
    age: payload.age || "",
    email: payload.email || "",
    number: payload.number || "",
  };
};

export const accountSlice = createSlice({
  name: "accountSlice",
  initialState: initialState,
  reducers: {
    logOutUser() {
      tokenStorageService.clearToken();
    },
  },
  extraReducers(builder) {
    builder
      .addMatcher(
        accountApi.endpoints.signUp.matchFulfilled,
        (state, { payload }) => {
          tokenStorageService.setToken(payload.tokens.access);
          state.user = {
            first_name: payload.first_name || "",
            last_name: payload.last_name || "",
            gender: payload.gender || "",
            wholesaler: payload.wholesaler,
            age: payload.age || "",
            email: payload.email || "",
            number: payload.number || "",
          };
        }
      )
      .addMatcher(
        accountApi.endpoints.signIn.matchFulfilled,
        (state, { payload }) => {
          console.log("Payload in signIn:", payload);

          if (
            payload.user &&
            payload.user.tokens &&
            payload.user.tokens.access
          ) {
            tokenStorageService.setToken(payload.user.tokens.access);
          }

          state.user = {
            first_name: payload.user.first_name || "",
            last_name: payload.user.last_name || "",
            gender: payload.user.gender || 0,
            wholesaler: payload.user.wholesaler || false,
            age: payload.user.age || 0,
            email: payload.user.email || "",
            number: payload.user.number || 0,
            username: payload.user.username || "",
          };
        }
      )

      .addMatcher(accountApi.endpoints.signUp.matchRejected, () => {
        tokenStorageService.clearToken();
      })
      .addMatcher(accountApi.endpoints.getMe.matchFulfilled, actionSetUser)
      .addMatcher(accountApi.endpoints.getMe.matchRejected, () => {
        console.log("reject");
      })
      .addMatcher(accountApi.endpoints.refresh.matchRejected, () => {
        tokenStorageService.clearToken();
      })
      .addMatcher(
        accountApi.endpoints.refresh.matchFulfilled,
        (_, { payload }) => {
          tokenStorageService.setToken(payload.access);
        }
      );
  },
});

export const { logOutUser } = accountSlice.actions;
