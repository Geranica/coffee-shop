import CoffeeListSectionCard from "../coffee-list-section-card/coffee-list-section-card";
import'./list-coffe.scss';

const ListCoffee = ({ allCoffeeCards }) => {
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

  return (
    <section className="list-coffee">
      <div className="list-coffee__container container">
        <ul className="list-coffee__list">{elements}</ul>
      </div>
    </section>
  );
};

export default ListCoffee;
