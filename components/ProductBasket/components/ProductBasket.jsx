import React from "react";
import { Counter } from "../../../components/ui/Counter/Counter";
import { store } from "../../../store";
import s from "./ProductBasket.module.css";

export const ProductBasket = ({ image, title, quantity, price }) => {
  const { devicesStore } = store;
  const { isMobile } = devicesStore;
  return (
    <div className={s.container}>
      <img src={image} alt="img" className={s.img} />
      <div className={s.block}>
      <p className={s.title}>{title}</p>
      <Counter />
      <p className={s.price}>{price} сом</p>
      </div>
      <button className={s.close}>&#x2716;</button>
    </div>
  );
};
