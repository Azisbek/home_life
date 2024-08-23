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
        <div>
          <img className={s.productImg} src={data.image1} alt='img' />
        </div>
        <div className={s.description}>
          <span>{data.brand.title}</span>
          <Rating
            size={26}
            initialValue={data.avg_rating}
            allowFraction={true}
            readonly={true}
          />
          <p className={s.colorText}>Цвета</p>
          <div className={s.color}>
            <div className={s.color1}></div>
            <div className={s.color2}></div>
          </div>
          <p>{data.price}</p>
          <Counter />
          <AppButton className={s.button} variant='button'>
            Добавить в корзину
          </AppButton>
        </div>
      </div>
    </div>
  );
};
