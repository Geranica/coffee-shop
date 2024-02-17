import { useState } from "react";

import OurCoffeeOrForYourPleasureMain from "../our-coffee-or-for-your-pleasure-main/our-coffee-or-for-your-pleasure-main";
import AboutOurBeans from "../about-our-beans-or-goods/about-our-beans-or-goods";
import CoffeeListSection from "../coffee-list-section/coffee-list-section";

import db from "../../db/db";

const OurCoffeePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("All");
  const data = db.allCoffeeCards;

  const filterAndSearchCards = () => {
    return data.filter(
      (item) =>
        (searchValue.length === 0 ||
          item.cardNameAndQuantity
            .toLowerCase()
            .includes(searchValue.toLowerCase())) &&
        (filterValue === "All" || item.origin === filterValue)
    );
  };

  /* const visibleCards = filterAndSearchCards();

  const searchCard = () => {
    if (searchValue.length === 0) {
      return data;
    }
    return data.filter((item) =>
      item.cardNameAndQuantity.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const filterCard = () => {
    const searchedCard = searchCard();
    if (filterValue === "All") {
      return searchedCard;
    } else {
      return searchedCard.filter((item) => item.origin === filterValue);
    }
  }; */

  const visibleCards = filterAndSearchCards();
  return (
    <>
      <OurCoffeeOrForYourPleasureMain />
      <AboutOurBeans />
      <CoffeeListSection
        activeButton={filterValue}
        handleFilter={setFilterValue}
        handleSearch={setSearchValue}
        allCoffeeCards={visibleCards}
      />
    </>
  );
};

export default OurCoffeePage;
