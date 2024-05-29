import React from "react";
import { HomeNewProduct } from "./components/HomeNewProduct";
import { BannerHome } from "./components/HomeBanner";
import { HomeSelected } from "./components/HomeSelect";
import { HomePromotion } from "./components/HomePromotionProduct";
import { HomePopular } from "./components/HomePopProduct";

const HomePage = ({ mainData }) => {
  return (
    <>
      <BannerHome />
      <HomeSelected />
      <HomeNewProduct mainData={mainData} />
      <HomePopular mainData={mainData} />
      <HomePromotion mainData={mainData} />
    </>
  );
};

export default HomePage;
