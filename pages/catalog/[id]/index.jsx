import { ProductId } from "../../../pageLayout/ProductId";


const ProductgDetail = () => {
  return <ProductId />;
};

export default ProductgDetail;

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
