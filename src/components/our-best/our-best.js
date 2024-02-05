import { Component } from "react";
import { nanoid } from "nanoid";

import Card from "../card/card";

import "./our-best.scss";

class OurBest extends Component {
  render() {
    const ourBestData = [
      {
        cardImage: "/images/images_card/best_1.jpg", 
        cardNameAndQuantity: "Solimo Coffee Beans 2 kg",
        cardPrice: 10.73,
        id: nanoid(),
      },
      {
        cardImage: "/images/images_card/best_2.jpg",
        cardNameAndQuantity: "Presto Coffee Beans 1 kg",
        cardPrice: 15.99,
        id: nanoid(),
      },
      {
        cardImage: "/images/images_card/best_3.jpg",
        cardNameAndQuantity: "AROMISTICO Coffee 1 kg",
        cardPrice: 6.99,
        id: nanoid(),
      },

    ];

    const elements = ourBestData.map((item) => {
      return (
        <Card
          cardImage={item.cardImage}
          cardNameAndQuantity={item.cardNameAndQuantity}
          cardPrice={item.cardPrice}
          key={item.id}
        />
      );
    });

    return (
      <section className="our-best">
        <div className="our-best__container container">
          <h2 className="our-best__title">Our best</h2>
          <ul className="our-best__list">
            {elements}
          </ul>
        </div>
      </section>
    );
  }
}

export default OurBest;
