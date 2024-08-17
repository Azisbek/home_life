import React from "react";
import { useRouter } from "next/router";
import { Rating } from "react-simple-star-rating";
import Image from "next/image";

import { SwiperBullet } from "../ui/Swiper_bullet";
import { AppButton } from "../ui/Button/AppButton";

import ProductImg from "../../assets/product_img.png";

import s from "./ProductItemMobile.module.css";
import { ROUTER_NAMES } from "../../router/routerNames";

export const ProductItemMobile = ({ data }) => {
  const { title, rating, price, id } = data;

  const router = useRouter();

  const handleClick = () => {
    router.push(`${ROUTER_NAMES.CATALOG}/${id}/`);
  };

  return (
    <div className={s.blockCart}>
      <div className={s.blockImg}>
        <Image src={ProductImg} width={158} height={164} />
      </div>
      <SwiperBullet count={3} num={1} />
      <div className={s.contentProductCart}>
        <div className={s.starTitleContainer}>
          <Rating
            size={20}
            initialValue={rating}
            allowFraction={true}
            readonly={true}
          />
        </div>

        <div className={s.information}>
          <p className={s.title}>{title}</p>
          <p className={s.price}>{price} som</p>
        </div>

        <AppButton onClick={handleClick} variant='button'>
          Купить
        </AppButton>
      </div>
    </div>
  );
};
