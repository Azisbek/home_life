import { useEffect } from "react";
import HomePage from "../pageLayout/MainPage";
import { useGetMainPageQuery } from "../pageLayout/MainPage/api";
import { meLoader } from "../store/lib/meLoader";

const Home = () => {
  const { data, isLoading, isError } = useGetMainPageQuery();

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

  return <HomePage isLoading={isLoading} mainData={data?.homepage} />;
};

export default Home;
