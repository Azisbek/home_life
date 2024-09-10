import React, { useEffect } from "react";
import { HomeNewProduct } from "./components/HomeNewProduct";
import { BannerHome } from "./components/HomeBanner";
import { HomeSelected } from "./components/HomeSelect";
import { HomePromotion } from "./components/HomePromotionProduct";
import { HomePopular } from "./components/HomePopProduct";
import { HomeAbout } from "./components/HomeAbout";
import { Logout } from "../../components/Logaut/Logaut";
import { useSelector } from "react-redux";

const HomePage = ({ mainData, isLoading }) => {
  const user = useSelector((state) => state.accountSlice.user);
  console.log(user, "login");

  return (
    <>
      <Logout>logout</Logout>
      <h1>{user.first_name}</h1>
      <BannerHome />
      <HomeSelected />
      <HomeNewProduct loading={isLoading} mainData={mainData?.new} />
      <HomePopular loading={isLoading} mainData={mainData?.popular} />
      <HomePromotion loading={isLoading} mainData={mainData?.promotion} />
      <HomeAbout />
    </>
  );
};

export default HomePage;
