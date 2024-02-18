import { Link } from "react-router-dom";

import "./navigation.scss";
import sprite from "../../icons/sprite.svg";

const Navigation = ({ navigationColor }) => {
  let logoColor = navigationColor === "black" ? "black-logo" : "white-logo";
  let className =
    navigationColor === "black"
      ? "navigation__item navigation__item_black"
      : "navigation__item";

  return (
    <div className="navigation">
      <div className="navigation__container container">
        <div className="navigation__logo">
          <Link to="/" className="navigation__logo-link">
            <svg className={logoColor}>
              <use href={`${sprite}#beans-logo`}></use>
            </svg>
          </Link>
        </div>
        <nav className="navigation__menu">
          <ul className="navigation__list">
            <li className={className}>
              <Link to="/">Coffee house</Link>
            </li>
            <li className={className}>
              <Link to="/our-coffee">Our coffee</Link>
            </li>
            <li className={className}>
              <Link to="for-your-pleasure">For your pleasure</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
