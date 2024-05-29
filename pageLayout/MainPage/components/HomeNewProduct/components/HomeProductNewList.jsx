import React from "react";
import ProductItem from "../../../../../components/ProductItem/ProductItem";
import classes from "./HomeProductNewList.module.css";

const HomeProductNewList = ({ mainData }) => {
  return (
    <div className={classes.containerProduct}>
      {mainData?.map((el) => {
        return <ProductItem data={el} />;
      })}
    </div>
  );
};

export default HomeProductNewList;
