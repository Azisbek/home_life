import { useRouter } from "next/router";
import { ViewProduct } from "./components/ViewProduct/ViewProduct";
import { Characteristic } from "./components/Characteristic/Characteristic";
import { BlockDescription } from "./components/BlockDescription/BlockDescription";
import s from "./ProductId.module.css";

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
