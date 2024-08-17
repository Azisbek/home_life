import React from "react";
import ProductItem from "../../../../../components/ProductItem/ProductItem";
import classes from "./PromotionProduct.module.css";

const PromotionProduct = ({ array }) => {
  return (
    <div className={classes.containerProduct}>
      {array.map((el, index) => {
        return <ProductItem key={`${index}: ${el.title}`} data={el} />;
      })}
    </div>
  );
};

export default PromotionProduct;
