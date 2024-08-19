import React from "react";
import { HomeNewProduct } from "./components/HomeNewProduct";
import { BannerHome } from "./components/HomeBanner";
import { HomeSelected } from "./components/HomeSelect";
import { HomePromotion } from "./components/HomePromotionProduct";
import { HomePopular } from "./components/HomePopProduct";
import { productList } from "./content/data";
import { HomeAbout } from "./components/HomeAbout";
import Backdrop from "../../components/Backdrop/Backdrop";
import { useToggleBackdrop } from "../../hook/useToggleBackdrop";
import { Drawer } from "../../components/ui/Drawer/Drawer";

const HomePage = ({ mainData }) => {
  // const {
  //   isOpen,
  //   currentY,
  //   backdropRef,
  //   handleTouchStart,
  //   handleTouchMove,
  //   handleTouchEnd,
  //   openBackdrop,
  // } = useToggleBackdrop();
  console.log(mainData);
  return (
    <>
      {/* <Backdrop
        isOpen={isOpen}
        handleTouchStart={handleTouchStart}
        handleTouchMove={handleTouchMove}
        handleTouchEnd={handleTouchEnd}
        backdropRef={backdropRef}
        currentY={currentY}
      >
        <img
          style={{
            width: "270px",
            height: "250px",
          }}
          src='https://i.pinimg.com/originals/12/82/1a/12821aef23d6a0615e08d056bf5018e1.jpg'
          alt=''
        />
        <h3>Ulan baby</h3>
      </Backdrop> */}

      {/* <button onClick={openBackdrop}>Open Backdrop</button> */}
      <BannerHome />
      <HomeSelected />
      <HomeNewProduct mainData={mainData.new} />
      <HomePopular mainData={mainData.popular} />
      <HomePromotion mainData={mainData.promotion} />
      <HomeAbout />

      {/* <Drawer isOpen={true} placement='bottom'>
        wdwdwd
      </Drawer> */}
    </>
  );
};

export default HomePage;
