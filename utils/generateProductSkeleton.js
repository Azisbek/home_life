import React from "react";
import { ProductSkeleton } from "../components/ui/ProductSkeleton";

const SKELETON_COUNT = 5;

export const generateProductSkeletons = (count = SKELETON_COUNT) => {
  return (
    <>
      {[...Array(count)].map((_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </>
  );
};
