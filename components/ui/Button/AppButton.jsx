import React from "react";
import clsx from "clsx";

import classes from "./AppButton.module.css";

export const AppButton = ({
  type,
  children,
  onClick,
  className,
  variant = "button" | "whiteBtn",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(classes[variant], classes[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
