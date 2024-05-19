import React from "react";
import { HomeNewProduct } from "./components/HomeNewProduct";

const HomePage = ({ mainData }) => {
  console.log(mainData);
  return (
    <>
      <HomeNewProduct mainData={mainData} />
    </>
  );
};

export default HomePage;
