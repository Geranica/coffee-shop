import { Component } from "react";

import "./card.scss";

class Card extends Component {
  render() {
    let { cardImage, cardNameAndQuantity, cardPrice } = this.props;

    return (
      <li className="card">
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
      </li>
    );
  }
}

export default Card;
