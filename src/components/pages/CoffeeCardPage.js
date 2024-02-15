import { useParams } from "react-router-dom";

import OurCoffeeMain from "../our-coffee-main/our-coffee-main";
import CoffeeCardSection from "../coffee-card-section/coffee-card-section";

import db from "../../db/db";

const CoffeeCardPage = () => {
  const { id } = useParams();
  const data = id.includes('a') ? db.bestCards : db.allCoffeeCards;

  return (
    <>
      <OurCoffeeMain />
      <CoffeeCardSection data={data} productId={id} />
    </>
  );
};

export default CoffeeCardPage;
