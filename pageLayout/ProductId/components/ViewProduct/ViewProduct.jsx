import React from "react";
import { AppButton } from "../../../../components/ui/Button/AppButton";
import { Rating } from "react-simple-star-rating";
import { Counter } from "../../../../components/ui/Counter/Counter";
import s from "./ViewProduct.module.css";

export const ViewProduct = ({ data }) => {
  return (
    <div className={s.container}>
      <h3>Просмотр товара</h3>
      <div className={s.aboutProduct}>
        <div className={s.containerCleaner}>
          <img className={s.cleaner} src={data.image1} alt='img' />
        </div>
        <div className={s.descriptionCleaner}>
          <span>{data.brand.title}</span>
          <Rating
            size={26}
            initialValue={data.avg_rating}
            allowFraction={true}
            readonly={true}
          />
          <p className={s.col}>Цвета</p>
          <div className={s.color}>
            <div className={s.color1}></div>
            <div className={s.color2}></div>
          </div>
          <p>{data.price}</p>
          <Counter />
          <AppButton className={s.button}>Перейти в корзину</AppButton>
        </div>
      </div>
    </div>
  );
};
