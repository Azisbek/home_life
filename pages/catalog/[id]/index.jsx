import { ProductId } from "../../../pageLayout/ProductId";
import { ProductIdApi } from "../../../services/api/ProductIdApi";

const ProductDetail = ({ catalogData }) => {
  return <ProductId catalogData={catalogData} />;
};

export default ProductDetail;

export const getServerSideProps = async (context) => {
  const id = context.params;
  try {
    const { data } = await ProductIdApi.getMainPage(id);
    return {
      props: {
        catalogData: data,
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
