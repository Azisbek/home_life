import React from "react";
import { ProductBasket } from "../../../../components/ProductBasket";
import { CardOrders } from "../../../../components/CardOrders/ui/CardOrders";
import s from "./CartProducts.module.css";

export const CartProducts = () => {
  const array = [
    {
      image: "https://kupi.kg/cache/files/904.jpg_w800_h800_resize.jpg",
      title: "vacuum cleaner",
      price: 2000,
      quantity: 4,
    },
  ];

  return (
    <div className={s.containerList}>
      <h3 className={s.title}>Просмотр корзины</h3>
      <div className={s.containerBlock}>
        {array.map((el, index) => {
          return (
            <div key={el.title + index}>
              <ProductBasket
                image={el.image}
                title={el.title}
                price={el.price}
                quantity={el.quantity}
              />
            </div>
          );
        })}

        <CardOrders quantity={12} subtotal={2000} totalPrice={3999} />
      </div>
    </div>
  );
};
