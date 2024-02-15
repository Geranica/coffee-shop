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
        id={item.id}
      />
    );
  });

  const content =
    elements.length > 0 ? (
      <ul className="coffee-list-section__list">{elements}</ul>
    ) : (
      <div className="coffee-list-section__message">Nothing was found</div>
    );

  return (
    <section className="coffee-list-section">
      <div className="coffee-list-section__container container">
        <div className="coffee-list-section__search-and-filter-block">
          <SearchPanel handleSearch={handleSearch} />
          <FilterPanel
            activeButton={activeButton}
            handleFilter={handleFilter}
          />
        </div>
        {content}
      </div>
    </section>
  );
};

export default CoffeeListSection;
