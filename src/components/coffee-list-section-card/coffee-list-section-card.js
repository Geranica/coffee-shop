import { Link } from "react-router-dom";
import "./coffee-list-section-card.scss";

const CoffeeListSectionCard = ({
  cardImage,
  cardNameAndQuantity,
  cardPrice,
  origin,
  id,
}) => {
  return (
    <li className="coffee-list-section-card">
      <Link className="coffee-list-section-card__link" to={`/our-coffee/${id}`}>
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
      </Link>
    </li>
  );
};

export default CoffeeListSectionCard;
