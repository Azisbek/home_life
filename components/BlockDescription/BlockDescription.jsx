import React from "react";
import s from "./BlockDescription.module.css";
import { Space } from "../ui/Space/Space";
import { store } from "../../store";

export const BlockDescription = ({ title, description }) => {
  const { devicesStore } = store;
  const { isMobile } = devicesStore;
  return (
    <div className={s.containDescription}>
      <h3 className={s.title}>{title}</h3>
      <Space h={isMobile ? 10 : 22} />
      <p className={s.description}>{description}</p>
    </div>
  );
};
