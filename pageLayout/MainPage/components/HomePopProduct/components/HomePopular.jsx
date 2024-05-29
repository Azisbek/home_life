import React from "react";
import HomePopularProduct from "./HomePopularProduct";
import classes from "./HomePopular.module.css";

const HomePopular = ({ mainData }) => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className={classes.containerHomeProduct}>
      <h3>Популярные</h3>
      <HomePopularProduct array={array} />
    </div>
  );
};

export default HomePopular;
