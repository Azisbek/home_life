import { useEffect } from "react";
import CatalogPage from "../../pageLayout/CatalogPage";
import { CatalogPageApi } from "../../services/api/CatalogPageApi";
import { meLoader } from "../../store/lib/meLoader";

const Catalog = ({ catalogData }) => {
  useEffect(() => {
    const loadData = async () => {
      try {
        await meLoader();
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadData();
  }, []);

  return <CatalogPage data={catalogData} />;
};
export default Catalog;

export const getServerSideProps = async (ctx) => {
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
        mainData: "error data",
      },
    };
  }
};
