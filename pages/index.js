import HomePage from "../pageLayout/MainPage";
import { MainPageApi } from "../services/api/MainPageApi";

const Home = ({ mainData }) => {
  return <HomePage mainData={mainData} />;
};
export default Home;

export const getServerSideProps = async () => {
  try {
    const { data } = await MainPageApi.getMainPage();
    return {
      props: {
        mainData: data,
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
