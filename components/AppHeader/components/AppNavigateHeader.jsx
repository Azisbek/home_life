import React from "react";
import classes from "./AppNavigateHeader.module.css";

export const AppNavigateHeader = () => {
  return (
    <ul className={classes.containerNavigate}>
      <li>Главная </li>
      <li>Контакты</li>
      <li>Корзина</li>
      <li>О нас</li>
    </ul>
  );
};
