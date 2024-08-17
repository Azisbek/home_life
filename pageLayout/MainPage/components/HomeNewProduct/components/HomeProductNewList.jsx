import React from "react";
import ProductItem from "../../../../../components/ProductItem/ProductItem";
import { ProductItemMobile } from "../../../../../components/ProductItemMobile/ProductItemMobile";
import { store } from "../../../../../store";
import s from "./HomeProductNewList.module.css";
import { observer } from "mobx-react-lite";

export const HomeProductNewList = observer(({ mainData }) => {
  const { devicesStore } = store;
  const { isMobile } = devicesStore;

  console.log(mainData);
  return (
    <div className={isMobile ? s.containerProductMobile : s.containerProduct}>
      {mainData?.map((el, index) => {
        return isMobile ? (
          <ProductItemMobile data={el} key={`${index}-${el.title}`} />
        ) : (
          <ProductItem data={el} key={`${index}-${el.title}`} />
        );
      })}
    </div>
  );
});
