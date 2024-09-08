import React from "react";
import s from "./BannerHome.module.css";
// import homeBanner from "../../../../../assets/homeBanner.png";
import ProductItem from "../../../../../components/ProductItem/ProductItem";

export const BannerHome = ({ mainData }) => {
  return (
    <>
      {/* <img src={homeBanner} alt="img-home-banner" /> */}
      <img
        className={s.bannerHome}
        src="https://media.us.lg.com/transform/7ac380d6-d713-4475-88d2-3d7fc8c19707/2024_HA_Washer-Dryer-Vacuum-Deal_ContentCard_768x432"
        alt="img-home-banner"
      />
      <div className={s.containerHomeProduct}>
        <h4>Товар дня</h4>
        <ProductItem data={mainData} />
      </div>
    </>
  );
};
