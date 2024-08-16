import React from "react";
import { ProductList } from "./components/ProductList/ProductList";

const CatalogPage = ({ data }) => {
  console.log(data);
  return (
    <>
      <ProductList />
    </>
  );
};

export default CatalogPage;
