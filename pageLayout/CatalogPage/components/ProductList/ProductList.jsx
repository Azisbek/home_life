import React, { useEffect, useState } from "react";
import { data } from "../../content/content";
import ProductItem from "@components/ProductItem/ProductItem";
import { generateProductSkeletons } from "../../../../utils/generateProductSkeleton";
import s from "./ProductList.module.css";

export const ProductList = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={s.containerProduct}>
      {loading
        ? generateProductSkeletons(14)
        : data.map((el, index) => (
            <ProductItem data={el} key={index + el.title} />
          ))}
    </div>
  );
};
