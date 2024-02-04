import { Component } from "react";

import "./main.scss";
import background from "./images/Main bg.png";
import contentLogo from "./images/Beans logo.svg";

class Main extends Component {
  render() {
    return (
      <section className="main">
        <div className="container">
          <div className="main__container">
            <div className="main__content">
              <h1 className="main__title">Everything You Love About Coffee</h1>
              <img className="main__bean-image" src={contentLogo} alt="" />
              <div className="main__text">
                <h2 className="main__subtitle">
                  We makes every day full of energy and taste
                </h2>
                <div className="main__question">Want to try our beans?</div>
              </div>
              <a className="main__button" href="#">
                More
              </a>
            </div>
          </div>
        </div>
        <div className="main__image-background">
          <img src={background} alt="background" />
        </div>
      </section>
    );
  }
}

export default Main;
