import React from "react";
import { Counter } from "../../../components/ui/Counter/Counter";
import s from "./ProductBasket.module.css";

export const ProductBasket = ({ image, title, quantity, price }) => {
  return (
   
      <div className={s.container}>
        <img src={image} alt="img" />
        <p className={s.title}>{title}</p>
        <Counter />
          <p className={s.price}>{price} сом</p>
          <button className={s.close}>&#x2716;</button>

      </div>
   
  );
};
