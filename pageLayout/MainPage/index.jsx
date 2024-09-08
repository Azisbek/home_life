import React from "react";
import { HomeNewProduct } from "./components/HomeNewProduct";
// import { BannerHome } from "./components/HomeBanner";
// import { HomeSelected } from "./components/HomeSelect";
import { HomePromotion } from "./components/HomePromotionProduct";
import { HomePopular } from "./components/HomePopProduct";
import { HomeAbout } from "./components/HomeAbout";
import { HomeHero } from "./components/HomeHero";
// import Backdrop from "../../components/Backdrop/Backdrop";
// import { useToggleBackdrop } from "../../hook/useToggleBackdrop";
// import { Drawer } from "../../components/ui/Drawer/Drawer";

const HomePage = ({ mainData, status }) => {
  console.log(mainData, 'mainData');
  return (
    <>
      <HomeHero mainData={mainData.product_of_the_day}/>
      <HomeNewProduct mainData={mainData.new} />
      <HomePopular mainData={mainData.popular} />
      <HomePromotion mainData={mainData.promotion} />
      <HomeAbout />
    </>
  );
};

export default HomePage;
