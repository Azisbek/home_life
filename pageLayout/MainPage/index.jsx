import React from "react";
import { HomeNewProduct } from "./components/HomeNewProduct";
import { BannerHome } from "./components/HomeBanner";
import { HomeSelected } from "./components/HomeSelect";
import { HomePromotion } from "./components/HomePromotionProduct";
import { HomePopular } from "./components/HomePopProduct";
import { ProductList } from "./content/data";
import { HomeAbout } from "./components/HomeAbout";

const HomePage = ({ mainData }) => {
  return (
    <>
      <BannerHome />
      <HomeSelected />
      <HomeNewProduct mainData={mainData} />
      <HomePopular mainData={ProductList} />
      <HomePromotion mainData={mainData} />
      <HomeAbout />
    </>
  );
};

export default HomePage;
