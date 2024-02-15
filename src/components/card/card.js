import { Link } from "react-router-dom";

import "./card.scss";

const Card = ({ cardImage, cardNameAndQuantity, cardPrice, id }) => {
  return (
    <li className="card">
      <Link to={`/our-coffee/${id}`} className="card__link">
        <div className="card__content">
          <div className="card__image-wrapper">
            <img className="card__image" src={cardImage} alt="card" />
          </div>
          <div className="card__description">
            <div className="card__name-and-quantity ">
              {cardNameAndQuantity}
            </div>
            <div className="card__price">{`${cardPrice}$`}</div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Card;
