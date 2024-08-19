import React from "react";
import { ProductSkeleton } from "../components/ui/ProductSkeleton/DesktopSkeleton";
import { MobileSkeleton } from "../components/ui/ProductSkeleton/MobileSkeleton";
import { store } from "store";

const SKELETON_COUNT = 5;

export const generateProductSkeletons = (count = SKELETON_COUNT) => {
  const { devicesStore } = store;
  const { isMobile } = devicesStore;
  return (
    <>
      {[...Array(count)].map((_, index) =>
        isMobile ? (
          <MobileSkeleton key={index} />
        ) : (
          <ProductSkeleton key={index} />
        )
      )}
    </>
  );
};
