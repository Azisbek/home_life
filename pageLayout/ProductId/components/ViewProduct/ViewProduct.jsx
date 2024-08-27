import React from "react";
import { AppButton } from "../../../../components/ui/Button/AppButton";
import { SwipeImage } from "../../../../components/SwipeImage/SwipeImage";
import { Rating } from "react-simple-star-rating";
import { Counter } from "../../../../components/ui/Counter/Counter";
import s from "./ViewProduct.module.css";

export const ViewProduct = ({ data }) => {
  return (
    <div className={s.container}>
      <h3>Просмотр товара</h3>
      <div className={s.aboutProduct}>
        <div>
          <SwipeImage images={data.images} />
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
            <div style={{ background: data.color.key }} />
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
