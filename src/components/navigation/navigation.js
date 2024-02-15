import { Link } from "react-router-dom";

import "./navigation.scss";
import whiteLogo from "./img/logo.svg";
import blackLogo from "./img/black-logo.svg";

const Navigation = ({ navigationColor }) => {
  let logo = whiteLogo;
  let className = "navigation__item";

  if (navigationColor === "black") {
    logo = blackLogo;
    className += " navigation__item_black";
  }

  return (
    <div className="navigation">
      <div className="navigation__container container">
        <div className="navigation__logo">
          <Link to="/" className="navigation__logo-link">
            <img src={logo} alt="logo-img" />
          </Link>
        </div>
        <nav className="navigation__menu">
          <ul className="navigation__list">
            <li className={className}>
              <Link to="/">Coffee house</Link>
            </li>
            <li className={className}>
              <Link to='/our-coffee'>Our coffee</Link>
            </li>
            <li className={className}>
              <a href="#">For your pleasure</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
