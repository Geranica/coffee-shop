import { Component } from "react";

import Card from "../card/card";

import "./our-best.scss";

class OurBest extends Component {
  render() {
    const { ourBestData } = this.props;

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
          <ul className="our-best__list">{elements}</ul>
        </div>
      </section>
    );
  }
}

export default OurBest;
