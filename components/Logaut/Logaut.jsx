import React from "react";
import { AppButton } from "../ui/Button/AppButton";

export const Logout = ({ children }) => {
  return (
    <AppButton
      onClick={() => localStorage.removeItem("access")}
      variant='button'
    >
      {children}
    </AppButton>
  );
};
