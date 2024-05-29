import React from "react";
import ProductItem from "../../../../../components/ProductItem/ProductItem";
import classes from "./PromotionProduct.module.css";

const PromotionProduct = ({ array }) => {
  return (
    <div className={classes.containerProduct}>
      {array.map((el) => {
        return <ProductItem />;
      })}
    </div>
  );
};

export default PromotionProduct;
