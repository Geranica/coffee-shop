import logo from "./images/Beans logo.svg";
import "./coffee-card-section.scss";

const CoffeeCardSection = ({ data, productId }) => {
  const product = data.find((item) => item.id === productId);
  const { cardImage, origin, cardPrice, description } = product;

  return (
    <section className="coffee-card-section">
      <div className="coffee-card-section__container container">
        <div className="coffee-card-section__about-it-block">
          <div className="coffee-card-section__image">
            <img src={cardImage} alt="coffee-card" />
          </div>
          <div className="coffee-card-section__text-block">
            <h2 className="coffee-card-section__title">About it</h2>
            <div className="coffee-card-section__logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="coffee-card-section__origin">
              <span>Country: </span>
              {origin}
            </div>
            <div className="coffee-card-section__description">
              <span>Description: </span>
              {description}
            </div>
            <div className="coffee-card-section__price">
              Price: <span>{cardPrice}$</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeCardSection;
