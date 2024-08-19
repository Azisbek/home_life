import HomePage from "../pageLayout/MainPage";
import { MainPageApi } from "../services/api/MainPageApi";

const Home = ({ mainData, statusText }) => {
  return <HomePage mainData={mainData.homepage} status={statusText} />;
};
export default Home;

export const getServerSideProps = async () => {
  try {
    const { data, status } = await MainPageApi.getMainPage();
    return {
      props: {
        mainData: data,
        statusText: status,
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
