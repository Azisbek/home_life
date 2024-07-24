import CatalogPage from "../../pageLayout/CatalogPage";
import { CatalogPageApi } from "../../services/api/CatalogPageApi";

const Catalog = ({ catalogData }) => {
  return <CatalogPage data={catalogData} />;
};
export default Catalog;

export const getServerSideProps = async () => {
  try {
    const { data } = await CatalogPageApi.getCatalogPage();
    return {
      props: {
        catalogData: data,
      },
    };
  } catch (error) {
    return {
      props: {
        mainData: "error",
      },
    };
  }
};
