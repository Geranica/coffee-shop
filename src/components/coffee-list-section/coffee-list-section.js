import SearchPanel from "../search-panel/search-panel";
import FilterPanel from "../filter-panel/filter-panel";
import CoffeeListSectionCard from "../coffee-list-section-card/coffee-list-section-card";

import "./coffee-list-sectionon.scss";

const CoffeeListSection = ({
  allCoffeeCards,
  handleSearch,
  handleFilter,
  activeButton,
}) => {
  const elements = allCoffeeCards.map((item) => {
    return (
      <CoffeeListSectionCard
        cardImage={item.cardImage}
        cardNameAndQuantity={item.cardNameAndQuantity}
        cardPrice={item.cardPrice}
        origin={item.origin}
        key={item.id}
      />
    );
  });

  return (
    <section className="coffee-list-sectionon">
      <div className="coffee-list-sectionon__container container">
        <div className="coffee-list-sectionon__search-and-filter-block">
          <SearchPanel handleSearch={handleSearch} />
          <FilterPanel
            activeButton={activeButton}
            handleFilter={handleFilter}
          />
        </div>
        <ul className="coffee-list-sectionon__list">{elements}</ul>
      </div>
    </section>
  );
};

export default CoffeeListSection;
