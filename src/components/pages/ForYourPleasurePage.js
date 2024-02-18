import OurCoffeeOrForYourPleasureMain from "../our-coffee-or-for-your-pleasure-main/our-coffee-or-for-your-pleasure-main";
import AboutOurBeansOrGoods from "../about-our-beans-or-goods/about-our-beans-or-goods";
import ListCoffee from "../list-coffee/list-coffee";

import db from "../../db/db";

const ForYourPleasurePage = () => {
  const data = db.allCoffeeCards;
  return (
    <>
      <OurCoffeeOrForYourPleasureMain />
      <AboutOurBeansOrGoods />
      <ListCoffee allCoffeeCards={data}/>
    </>
  );
};

export default ForYourPleasurePage;
