import React from "react";
import s from "./BlockDescription.module.css";

export const BlockDescription = ({ title, description }) => {
  return (
    <div className={s.containDescription}>
      <h3 className={s.title}>{title}</h3>

      <p className={s.description}>{description}</p>
    </div>
  );
};
