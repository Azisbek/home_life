import React from "react";
import { ProductContainer } from "./components/Product/ProductContainer";
import { data } from "./content/content";

const CatalogPage = () => {
  return (
    <>
      <ProductContainer data={data} />
    </>
  );
};

export default CatalogPage;
