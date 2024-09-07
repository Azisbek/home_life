import React, { useEffect, useState } from "react";
import { HomeNewProduct } from "./components/HomeNewProduct";
import { BannerHome } from "./components/HomeBanner";
import { HomeSelected } from "./components/HomeSelect";
import { HomePromotion } from "./components/HomePromotionProduct";
import { HomePopular } from "./components/HomePopProduct";
import { HomeAbout } from "./components/HomeAbout";
import { UserApi } from "../../services/api/UserApi";
import { Logout } from "../../components/Logaut/Logaut";
// import Backdrop from "../../components/Backdrop/Backdrop";
// import { useToggleBackdrop } from "../../hook/useToggleBackdrop";
// import { Drawer } from "../../components/ui/Drawer/Drawer";

const HomePage = ({ mainData }) => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await UserApi.getProfile();
        setProfile(profileData);
      } catch (err) {
        setError(err?.message);
      }
    };

    fetchProfile();
  }, []);

  return (
    <>
      <h1>{profile?.first_name}</h1>
      <Logout>logout</Logout>

      <BannerHome />
      <HomeSelected />
      <HomeNewProduct mainData={mainData.new} />
      <HomePopular mainData={mainData.popular} />
      <HomePromotion mainData={mainData.promotion} />
      <HomeAbout />
    </>
  );
};

export default HomePage;
