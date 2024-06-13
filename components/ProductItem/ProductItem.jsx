import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import dynamic from "next/dynamic";

import Image from "next/image";

import AppButton from "../ui/Button/AppButton";
import ProductImg from "../../assets/product_img.png";

import classes from "./ProductIte.module.css";
import { SwiperBullet } from "../ui/Swiper_bullet";

const ProductItem = ({ data }) => {
  const { title, rating, price } = data;

  return (
    <div className={classes.blockCart}>
      <div className={classes.blockImg}>
        <Image src={ProductImg} width={245} height={255} />
      </div>
      <SwiperBullet count={3} num={2} />
      <div className={classes.contentProductCart}>
        <div>
          <Rating
            size={24}
            initialValue={rating}
            allowFraction={true}
            readonly={true}
          />
          <div>
            <p className={classes.title}>{title}</p>
          </div>
        </div>

        <div className={classes.blockPrice}>
          <p className={classes.price}>{price} som</p>
          <AppButton>Купить</AppButton>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
