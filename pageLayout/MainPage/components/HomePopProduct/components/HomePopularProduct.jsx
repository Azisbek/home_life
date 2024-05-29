import React from "react";
import ProductItem from "../../../../../components/ProductItem/ProductItem";
import classes from "./HomePopularProduct.module.css";

const HomePopularProduct = ({ array }) => {
  return (
    <div className={classes.containerProduct}>
      {array.map((el) => {
        return <ProductItem />;
      })}
    </div>
  );
};

export default HomePopularProduct;
