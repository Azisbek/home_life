import React from "react";
import { Rating } from "react-simple-star-rating";
import Image from "next/image";

import { SwiperBullet } from "../ui/Swiper_bullet";
import AppButton from "../ui/Button/AppButton";

import ProductImg from "../../assets/product_img.png";

import classes from "./ProductIte.module.css";

const ProductItem = ({ data }) => {
  const { title, rating, price } = data;

  return (
    <div className={classes.blockCart}>
      <div className={classes.blockImg}>
        <Image src={ProductImg} width={245} height={255} />
      </div>
      <SwiperBullet count={3} num={1} />
      <div className={classes.contentProductCart}>
        <div className={classes.starTitleContainer}>
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
          <AppButton variant='button'>Купить</AppButton>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
