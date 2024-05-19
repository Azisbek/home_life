import React from "react";

const HomeNewProduct = ({ mainData }) => {
  return (
    <ul>
      {mainData.map((el) => {
        return <li>{el.name}</li>;
      })}
    </ul>
  );
};

export default HomeNewProduct;
