import { useLocation } from "react-router";

import image1 from "./images/girl-with-coffee.jpg";
import image2 from "./images/for-your-pleasure-img.jpg";
import db from "../../db/db";

import logo from "./images/Beans logo.svg";
import './about-our-beans-or-goods.scss'

const AboutOurBeansOrGoods = () => {
  const location = useLocation();
  const currentPage = location.pathname;

  const contentImage = currentPage === "/for-your-pleasure" ? image2 : image1;
  const title =
    currentPage === "/for-your-pleasure"
      ? "About our goods"
      : "About our beans";
  const text =
    currentPage === "/for-your-pleasure"
      ? db.contentText.aboutOurGoods
      : db.contentText.aboutOurBeans;

  return (
    <section className="about-our-beans">
      <div className="about-our-beans__container container">
        <div className="about-our-beans__content">
          <div className="about-our-beans__image">
            <img src={contentImage} alt="cup of coffee or girl with coffee" />
          </div>
          <div className="about-our-beans__description">
            <h2 className="about-our-beans__title">{title}</h2>
            <div className="about-our-beans__logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="about-our-beans__text">{text}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOurBeansOrGoods;
