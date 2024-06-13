import React from "react";
import HomePopularProduct from "./HomePopularProduct";
import classes from "./HomePopular.module.css";

const HomePopular = ({ mainData }) => {
  return (
    <div className={classes.containerHomeProduct}>
      <h3>Популярные</h3>
      <HomePopularProduct mainData={mainData} />
    </div>
  );
};

export default HomePopular;
