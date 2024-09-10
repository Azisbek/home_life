import React from "react";

import { ProductList } from "../../../../../components/ProductList/ProductList";

import classes from "./HomePopular.module.css";

const HomePopular = ({ mainData, loading }) => {
  return (
    <div className={classes.containerHomeProduct}>
      <h3>Популярные</h3>
      <ProductList loading={loading} data={mainData} />
    </div>
  );
};

export default HomePopular;
