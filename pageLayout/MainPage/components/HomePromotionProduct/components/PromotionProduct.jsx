import React from "react";
import ProductItem from "../../../../../components/ProductItem/ProductItem";
import { ProductItemMobile } from "../../../../../components/ProductItemMobile/ProductItemMobile";
import { store } from "../../../../../store";
import s from "./PromotionProduct.module.css";
import { observer } from "mobx-react-lite";

const PromotionProduct = observer(({ array }) => {
  const { devicesStore } = store;
  const { isMobile } = devicesStore;

  console.log(array);
  return (
    <div className={isMobile ? s.containerProductMobile : s.containerProduct}>
      {array?.map((el, index) => {
        return isMobile ? (
          <ProductItemMobile data={el} key={`${index}-${el.title}`} />
        ) : (
          <ProductItem data={el} key={`${index}-${el.title}`} />
        );
      })}
    </div>
  );
});

export default PromotionProduct;
