import React from "react";

import ProductItem from "../../../../../components/ProductItem/ProductItem";

import classes from "./HomePopularProduct.module.css";

const HomePopularProduct = ({ mainData }) => {
  return (
    <div className={classes.containerProduct}>
      {mainData.map((el, index) => {
        return <ProductItem data={el} key={el.title + index} />;
      })}
    </div>
  );
};

export default HomePopularProduct;
