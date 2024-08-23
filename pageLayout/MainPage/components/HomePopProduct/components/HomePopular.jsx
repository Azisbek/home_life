import React from "react";

import { ProductList } from "../../../../../components/ProductList/ProductList";

import classes from "./HomePopular.module.css";

const HomePopular = ({ mainData }) => {
  return (
    <div className={classes.containerHomeProduct}>
      <h3>Популярные</h3>
      <ProductList data={mainData} />
    </div>
  );
};

export default HomePopular;
