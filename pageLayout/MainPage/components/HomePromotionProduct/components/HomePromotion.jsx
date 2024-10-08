import React from "react";
import { ProductList } from "../../../../../components/ProductList/ProductList";
import s from "./HomePromotion.module.css";

const HomePromotion = ({ mainData, loading }) => {
  return (
    <div className={s.containerHomeProduct}>
      <h3>Акции</h3>
      <ProductList loading={loading} data={mainData} />
    </div>
  );
};

export default HomePromotion;
