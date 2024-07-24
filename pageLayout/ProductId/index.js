import { useRouter } from "next/router";
import clsx from "clsx";
import { ViewProduct } from "./components/ViewProduct/ViewProduct";
import { Characteristic } from "./components/Characteristic/Characteristic";
import s from "./ProductId.module.css";
import { BlockDescription } from "./components/BlockDescription/BlockDescription";

export const ProductId = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={s.container}>
      Product ID: {id ? id : "Loading..."}
      <ViewProduct />
      <Characteristic />
      <BlockDescription />
    </div>
  );
};
