import { useRouter } from "next/router";
import { ViewProduct } from "./components/ViewProduct/ViewProduct";
import { Characteristic } from "./components/Characteristic/Characteristic";
import { Description } from "./components/Description/Description";
import { CustomerReviewes } from "./components/CustomerReviews/CustomerReviewes";
import s from "./ProductId.module.css";

const array = [
  {
    title: "Ежедневная экспресс-программа",
    description:
      "Стиральная машина Beko WRE 6511 BWW имеет 15 пр ограмм стирки и максимальный отжим со скоростью 1000 об./мин. Функция отложенного стар та позволяет запускать стирку в любое время. Стиральная машина осуществляет автоматический контроль уровня воды и пенообразования во время работы.",
  },
  {
    title: "Ежедневная экспресс-программа",
    description:
      "Стиральная машина Beko WRE 6511 BWW имеет 15 пр ограмм стирки и максимальный отжим со скоростью 1000 об./мин. Функция отложенного стар та позволяет запускать стирку в любое время. Стиральная машина осуществляет автоматический контроль уровня воды и пенообразования во время работы.",
  },
];

const arr = [
  {
    id: "1",
    name: "Azisbek",
    date: new Date().toLocaleDateString(),
    rating: 3,
    comment: "goood yayasdasdasdasdasd asfesfwefwef",
  },
  {
    id: "2",
    name: "Ulan",
    date: new Date().toLocaleDateString(),
    rating: 4,
    comment: "goood yay",
  },
];

export const ProductId = () => {
  const { id } = useRouter();

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
