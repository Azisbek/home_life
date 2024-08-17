import React from "react";
import { HomeNewProduct } from "./components/HomeNewProduct";
import { BannerHome } from "./components/HomeBanner";
import { HomeSelected } from "./components/HomeSelect";
import { HomePromotion } from "./components/HomePromotionProduct";
import { HomePopular } from "./components/HomePopProduct";
import { ProductList } from "./content/data";
import { HomeAbout } from "./components/HomeAbout";
import Backdrop from "../../components/Backdrop/Backdrop";
import { useToggleBackdrop } from "../../hook/useToggleBackdrop";
import { Drawer } from "../../components/ui/Drawer/Drawer";

const HomePage = ({ mainData }) => {
  const {
    isOpen,
    currentY,
    backdropRef,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    openBackdrop,
  } = useToggleBackdrop();
  return (
    <>
      <Backdrop
        isOpen={isOpen}
        handleTouchStart={handleTouchStart}
        handleTouchMove={handleTouchMove}
        handleTouchEnd={handleTouchEnd}
        backdropRef={backdropRef}
        currentY={currentY}
      >
        hello
      </Backdrop>

      <button onClick={openBackdrop}>Open Backdrop</button>
      <BannerHome />
      <HomeSelected />
      <HomeNewProduct mainData={mainData} />
      <HomePopular mainData={ProductList} />
      <HomePromotion mainData={mainData} />
      <HomeAbout />

      {/* <Drawer isOpen={true} placement='bottom'>
        wdwdwd
      </Drawer> */}
    </>
  );
};

export default HomePage;
