import React from "react";
import PromotionProduct from "./PromotionProduct";
import classes from "./HomePromotion.module.css";

const HomePromotion = () => {
  const array = [1, 2, 3, 4];
  return (
    <div className={classes.containerHomeProduct}>
      <h3>Акции</h3>
      <PromotionProduct array={array} />
    </div>
  );
};

export default HomePromotion;
