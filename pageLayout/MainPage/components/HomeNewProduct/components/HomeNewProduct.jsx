import React from "react";
import HomeProductNewList from "./HomeProductNewList";
import { ProductList } from "../../../content/data";
import classes from "./HomeNewProduct.module.css";

const HomeNewProduct = ({ mainData }) => {
  return (
    <section className={classes.containerHomeProduct}>
      <h3>Новинки</h3>
      <HomeProductNewList mainData={ProductList} />
    </section>
  );
};

export default HomeNewProduct;
