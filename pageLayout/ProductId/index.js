import { useRouter } from "next/router";
import { ViewProduct } from "./components/ViewProduct/ViewProduct";
import { Characteristic } from "./components/Characteristic/Characteristic";
import { Description } from "./components/Description/Description";
import { CustomerReviewes } from "./components/CustomerReviews/CustomerReviewes";
import s from "./ProductId.module.css";

export const ProductId = ({ catalogData }) => {
  console.log(catalogData);

  return (
    <div className={s.container}>
      <ViewProduct data={catalogData} />
      <Characteristic data={catalogData} />
      <Description data={catalogData} />
      <CustomerReviewes array={[]} />
    </div>
  );
};
