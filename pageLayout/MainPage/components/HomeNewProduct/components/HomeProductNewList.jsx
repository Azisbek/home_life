import React from "react";
import ProductItem from "../../../../../components/ProductItem/ProductItem";
import classes from "./HomeProductNewList.module.css";

const HomeProductNewList = ({ mainData }) => {
  return (
    <div className={classes.containerProduct}>
      {/* {mainData?.map((el, index) => {
        return <ProductItem data={el} key={index} />;
      })} */}
    </div>
  );
};

export default HomeProductNewList;
