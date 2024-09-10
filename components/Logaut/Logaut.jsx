import React from "react";
import { AppButton } from "../ui/Button/AppButton";
import { useDispatch } from "react-redux";
import { logOutUser } from "../Account/model/accountSlice";

export const Logout = ({ children }) => {
  const dispatch = useDispatch();
  return (
    <AppButton onClick={() => dispatch(logOutUser())} variant='button'>
      {children}
    </AppButton>
  );
};
