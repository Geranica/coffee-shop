import image from "./images/girl-with-coffee.jpg";
import logo from "./images/Beans logo.svg";
import "./about-our-beans.scss";

const AboutOurBeans = () => {
  return (
    <section className="about-our-beans">
      <div className="about-our-beans__container container">
        <div className="about-our-beans__content">
          <div className="about-our-beans__image">
            <img src={image} alt="girl-with-coffee" />
          </div>
          <div className="about-our-beans__description">
            <h2 className="about-our-beans__title">About our beans</h2>
            <div className="about-our-beans__logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="about-our-beans__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br />
              <br /> Afraid at highly months do things on at. Situation
              recommend objection do intention
              <br /> so questions.
              <br /> As greatly removed calling pleased improve an. Last ask him
              cold feel
              <br /> met spot shy want. Children me laughing we prospect
              answered followed. At it went
              <br /> is song that held help face.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOurBeans;
