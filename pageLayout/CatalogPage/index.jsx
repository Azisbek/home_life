import React from "react";
import { ProductContainer } from "./components/Product/ProductContainer";
import { useSelector } from "react-redux";

const CatalogPage = ({ data }) => {
  const user = useSelector((state) => state.accountSlice.user);

  return (
    <>
      <p>{user.first_name}</p>
      <ProductContainer data={data.results} />
    </>
  );
};

export default CatalogPage;
