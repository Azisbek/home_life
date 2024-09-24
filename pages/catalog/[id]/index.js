import { ProductId } from "../../../pageLayout/ProductId";
import { ProductIdApi } from "../../../services/api/ProductIdApi";

const ProductDetail = ({ catalogData, id }) => {
  return <ProductId catalogData={catalogData} id={id} />;
};

export default ProductDetail;

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  try {
    const { data } = await ProductIdApi.getProductIdPage(id);
    return {
      props: {
        catalogData: data,
        id,
      },
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      props: {
        catalogData: null,
      },
    };
  }
};
