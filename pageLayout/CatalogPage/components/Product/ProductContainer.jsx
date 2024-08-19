import React from "react";
import { ProductList } from "../../../../components/ProductList/ProductList";

export const ProductContainer = ({ data }) => {
  return (
    <div>
      <ProductList data={data} />
    </div>
  );
};