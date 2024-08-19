import React from "react";
import { ProductContainer } from "./components/Product/ProductContainer";

const CatalogPage = ({ data }) => {
  return (
    <>
      <ProductContainer data={data.results} />
    </>
  );
};

export default CatalogPage;
