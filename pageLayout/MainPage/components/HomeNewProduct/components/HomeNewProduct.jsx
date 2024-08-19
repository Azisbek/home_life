import React from "react";
import { ProductList } from "../../../../../components/ProductList/ProductList";
import { productList } from "../../../content/data";
import s from "./HomeNewProduct.module.css";

const HomeNewProduct = () => {
  return (
    <section className={s.containerHomeProduct}>
      <h3>Новинки</h3>
      <ProductList data={productList} />
    </section>
  );
};

export default HomeNewProduct;
