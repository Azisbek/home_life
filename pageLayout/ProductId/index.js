import { useRouter } from "next/router";
import { ViewProduct } from "./components/ViewProduct/ViewProduct";
import { Characteristic } from "./components/Characteristic/Characteristic";
import { Description } from "./components/Description/Description";
import { CustomerReviewes } from "./components/CustomerReviews/CustomerReviewes";
import { store } from "../../store";
import { ViewProductMobile } from "./components/ViewProductMobile/ViewProductMobile";
import s from "./ProductId.module.css";
import { Space } from "../../components/ui/Space/Space";

export const ProductId = ({ catalogData }) => {
  const { devicesStore } = store;
  const { isMobile } = devicesStore;

  console.log(catalogData);

  return (
    <div className={s.container}>
      {isMobile ? (
        <ViewProductMobile data={catalogData} />
      ) : (
        <ViewProduct data={catalogData} />
      )}
      <Space h={isMobile ? 40 : 90} />
      <Characteristic data={catalogData} />
      <Space h={isMobile ? 40 : 90} />
      <Description data={catalogData} />
      <Space h={isMobile ? 40 : 90} />
      <CustomerReviewes array={[]} />
    </div>
  );
};
