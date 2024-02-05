import { Component } from "react";
import { nanoid } from "nanoid";

import Card from "../card/card";

import "./our-best.scss";

class OurBest extends Component {
  render() {
    const ourBestData = [
      {
        cardImage: "image",
        cardNameAndQuantity: "Solimo Coffee Beans 2 kg",
        cardPrice: 10.73,
        id: nanoid(),
      },
      {
        cardImage: "image",
        cardNameAndQuantity: "Presto Coffee Beans 1 kg",
        cardPrice: 15.99,
        id: nanoid(),
      },
      {
        cardImage: "image",
        cardNameAndQuantity: "AROMISTICO Coffee 1 kg",
        cardPrice: 6.99,
        id: nanoid(),
      },
    ];

    

    return (
      <section className="our-best">
        <div className="our-best__container container">
          <h2 className="our-best__title">Our best</h2>
          <ul className="our-best__list">
            
          </ul>
        </div>
      </section>
    );
  }
}

export default OurBest;
