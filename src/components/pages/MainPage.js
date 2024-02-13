import Main from "../main/main";
import AboutUs from "../about-us/about-us";
import OurBest from "../our-best/our-best";

import db from "../../db/db";

const MainPage = () => {
  const { bestCards } = db;
  return (
    <>
      <Main />
      <AboutUs />
      <OurBest ourBestData={bestCards} />
    </>
  );
};
export default MainPage;
