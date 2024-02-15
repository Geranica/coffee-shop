import { Link } from "react-router-dom";
import "./main.scss";
import background from "./images/Main bg.png";
import contentLogo from "./images/Beans logo.svg";

const Main = () => {
  return (
    <section className="main">
      <div className="main__container container">
        <div className="main__content">
          <h1 className="main__title">Everything You Love About Coffee</h1>
          <img className="main__bean-image" src={contentLogo} alt="" />
          <div className="main__text">
            <h2 className="main__subtitle">
              We makes every day full of energy and taste
            </h2>
            <div className="main__question">Want to try our beans?</div>
          </div>
          <Link to="our-coffee" className="main__button">
            More
          </Link>
        </div>
      </div>
      <div className="main__image-background">
        <img src={background} alt="background" />
      </div>
    </section>
  );
};

export default Main;
