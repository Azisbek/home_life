import React, { useEffect, useState } from "react";
import { store } from "../../store";
import ProductItem from "@components/ProductItem/ProductItem";
import { ProductItemMobile } from "@components/ProductItemMobile/ProductItemMobile";
import { generateProductSkeletons } from "../../utils/generateProductSkeleton";
import s from "./ProductList.module.css";
import { observer } from "mobx-react-lite";

export const ProductList = observer(({ data }) => {
  const { devicesStore } = store;
  const { isMobile } = devicesStore;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={isMobile ? s.containerProductMobile : s.containerProduct}>
      {isMobile
        ? loading
          ? generateProductSkeletons(8)
          : data.map((product, index) => (
              <ProductItemMobile
                data={product}
                key={`${index} ${product.title}`}
              />
            ))
        : loading
        ? generateProductSkeletons(8)
        : data.map((product, index) => (
            <ProductItem data={product} key={`${index} ${product.title}`} />
          ))}
    </div>
  );
});
