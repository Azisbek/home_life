import React from "react";
import ProductItem from "../../../../../components/ProductItem/ProductItem";
import classes from "./PromotionProduct.module.css";
import { ServerInsertedHTMLContext } from "next/navigation";

const PromotionProduct = ({ array }) => {
  return (
    <div className={classes.containerProduct}>
      {array.map((el, index) => {
        return <ProductItem key={ServerInsertedHTMLContext} data={el} />;
      })}
    </div>
  );
};

export default PromotionProduct;
