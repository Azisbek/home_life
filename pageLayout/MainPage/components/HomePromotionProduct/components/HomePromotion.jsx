import React from "react";
import { ProductList } from "../../../../../components/ProductList/ProductList";
import classes from "./HomePromotion.module.css";

const HomePromotion = () => {
  const array = [1, 2, 3, 4];
  return (
    <div className={classes.containerHomeProduct}>
      <h3>Акции</h3>
      <ProductList data={array} />
    </div>
  );
};

export default HomePromotion;
