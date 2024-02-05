import { Component } from "react";



import "./card.scss";

class Card extends Component {
  render() {

    let {cardImage, cardNameAndQuantity, cardPrice} = this.props;
    
    return (
      <li className="card">
        <a className="card__link-image" href="#">
          <img src={cardImage} alt="card" />
        </a>
        <div className="card__description">
          <div className="card__name-and-quantity ">
            {cardNameAndQuantity}
          </div>
          <div className="card__price">
              {`${cardPrice}$`}
            </div>
        </div>
      </li>
    );
  }
}

export default Card;
