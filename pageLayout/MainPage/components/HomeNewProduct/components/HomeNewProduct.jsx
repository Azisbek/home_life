import React from "react";
import { ProductList } from "../../../../../components/ProductList/ProductList";
import s from "./HomeNewProduct.module.css";

const HomeNewProduct = ({ mainData, loading }) => {
  return (
    <section className={s.containerHomeProduct}>
      <h3>Новинки</h3>
      <ProductList loading={loading} data={mainData} />
    </section>
  );
};

export default HomeNewProduct;
