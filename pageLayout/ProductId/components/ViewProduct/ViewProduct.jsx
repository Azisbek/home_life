import React from "react";
import Cleaner from "../../../../assets/cleaner.png";
import Image from "next/image";
import s from "./ViewProduct.module.css";
import AppButton from "../../../../components/ui/Button/AppButton";
import { Rating } from "react-simple-star-rating";
import { ProductAdder } from "../ProductAdder/ProductAdder";

export const ViewProduct = ({ rating }) => {
  return (
    <div className={s.container}>
      <h3>Просмотр товара</h3>
      <div className={s.aboutProduct}>
        <div className={s.containerCleaner}>
          <Image className={s.cleaner} src={Cleaner} alt="стиралка" />
        </div>
        <div className={s.descriptionCleaner}>
          <span>Стиральная машина Beko WRE6511BWW</span>
          <Rating
            size={26}
            initialValue={rating}
            allowFraction={true}
            readonly={true}
          />
          <p className={s.col}>Цвета</p>
          <div className={s.color}>
            <div className={s.color1}></div>
            <div className={s.color2}></div>
          </div>
          <p>25 490сом</p>
          <ProductAdder />
          <AppButton className={s.button}>Перейти в корзину</AppButton>
        </div>
      </div>
    </div>
  );
};
