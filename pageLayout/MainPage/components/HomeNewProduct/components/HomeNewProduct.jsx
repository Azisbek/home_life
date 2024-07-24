import React from "react";
import HomeProductNewList from "./HomeProductNewList";
import classes from "./HomeNewProduct.module.css";

const HomeNewProduct = ({ mainData }) => {
  return (
    <section className={classes.containerHomeProduct}>
      <h3>Новинки</h3>
      <HomeProductNewList mainData={mainData} />
    </section>
  );
};

export default HomeNewProduct;
