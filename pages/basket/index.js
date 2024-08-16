import { BasketPage } from "../../pageLayout/BasketPage";

const Basket = () => {
  return <BasketPage />;
};

export default Basket;

// export const getServerSideProps = async () => {
//   try {
//     const { data } = await CatalogPageApi.getCatalogPage();
//     return {
//       props: {
//         catalogData: data,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         mainData: "error",
//       },
//     };
//   }
// };
