import React from "react";
import classes from "./HomeAbout.module.css";

export const HomeAbout = () => {
  return (
    <section className={classes.containerHomeProduct}>
      <h3>О нас:</h3>

      <div className={classes.containerContent}>
        <p>Интернет-магазин MyShop.ru – лучшие товары по низким ценам!</p>

        <p>
          Мы рады предложить вам недорогие, но качественные товары с подробными
          описаниями, характеристиками и фотографиями. У нас Вы можете купить
          замечательные товары: технику, электронику, одежду, обувь, игрушки,
          книги и многое другое в вашем регионе по ценам производителей и без
          наценки.
        </p>

        <p>
          Продажа большого ассортимента разнообразных товаров – основная
          специализация нашего интернет-магазина. Мы доставим ваш заказ
          бесплатно в любой уголок мира, осуществим подробную консультацию по
          товарам и поможем с выбором. Магазин MyShop.ru предлагает Вам купить
          качественную и доступную технику, электронику, одежду, обувь, игрушки,
          книги и многое другое с доставкой! Все виды современных товаров от
          эконом класса до более дорогих представлены в нашем каталоге. Вы
          можете купить любые товары в вашем городе: технику, электронику,
          одежду, обувь, игрушки, книги и многое другое.
        </p>
      </div>
    </section>
  );
};
