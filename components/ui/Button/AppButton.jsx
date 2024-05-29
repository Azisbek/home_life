import React from "react";
import clsx from "clsx";
import classes from "./AppButton.module.css";

const AppButton = ({ type, children, onClick, className, ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(classes.button, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default AppButton;
