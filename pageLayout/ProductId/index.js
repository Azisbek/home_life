import { useRouter } from "next/router";
import { ViewProduct } from "./components/ViewProduct/ViewProduct";
import { Characteristic } from "./components/Characteristic/Characteristic";
import s from "./ProductId.module.css";
import { Description } from "./components/Description/Description";
import { CustomerReviewes } from "./components/CustomerReviews/CustomerReviewes";
import { ProductAdder } from "./components/ProductAdder/ProductAdder";

export const ProductId = () => {
  const router = useRouter();
  const { id } = router.query;
  const array = [1, 2, 3];
 
  const arr = [
    {
      name: "Azisbek",
      date: new Date().toLocaleDateString(),
      rating:3,
      comment:"goood yayasdasdasdasdasd asfesfwefwef"
    },
    {
      name: "Ulan",
      date: new Date().toLocaleDateString(),
      rating:4,
      comment:"goood yay"
    },
  ];
  return (
    <div className={s.container}>
      Product ID: {id ? id : "Loading..."}
      <ViewProduct />
      <Characteristic />
      <Description array={array} />
      <CustomerReviewes array={arr} />
    </div>
  );
};
