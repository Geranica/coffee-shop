import { useParams } from "react-router-dom";

import OurCoffeeOrForYourPleasureMain from "../our-coffee-or-for-your-pleasure-main/our-coffee-or-for-your-pleasure-main";
import CoffeeCardSection from "../coffee-card-section/coffee-card-section";

import db from "../../db/db";

const CoffeeCardPage = () => {
  const { id } = useParams();
  const data = id.includes("a") ? db.bestCards : db.allCoffeeCards;

  return (
    <>
      <OurCoffeeOrForYourPleasureMain />
      <CoffeeCardSection data={data} productId={id} />
    </>
  );
};

export default CoffeeCardPage;
