import "./coffee-list-section-card.scss";

const CoffeeListSectionCard = ({
  cardImage,
  cardNameAndQuantity,
  cardPrice,
  origin,
}) => {
   
  return (
    <li className="coffee-list-section-card">
      <div className="coffee-list-section-card__content">
        <div className="coffee-list-section-card__image-wrapper">
          <img
            className="coffee-list-section-card__image"
            src={cardImage}
            alt="card"
          />
        </div>
        <div className="coffee-list-section-card__description">
          <div className="coffee-list-section-card__name-and-quantity ">
            {cardNameAndQuantity}
          </div>
          <div className="coffee-list-section-card__origin">{origin}</div>
          <div className="coffee-list-section-card__price">{`${cardPrice}$`}</div>
        </div>
      </div>
    </li>
  );
};

export default CoffeeListSectionCard;
