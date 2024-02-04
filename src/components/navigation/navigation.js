import { Component } from "react";

import "./navigation.scss";
import whiteLogo from "./img/logo.svg";
import blackLogo from "./img/black-logo.svg";

class Navigation extends Component {
  render() {
    const { navigationColor } = this.props;
    let logo = whiteLogo;
    let className = "navigation__item";
    

    if (navigationColor === 'black') {
      logo = blackLogo;
      className += '_black'
    }
    

    return (
      <div className="navigation">
        <div className="container">
          <div className="navigation__container">
            <div className="navigation__logo">
              <a className="navigation__logo-link" href="#">
                <img src={logo} alt="logo-img" />
              </a>
            </div>
            <nav className="navigation__menu">
              <ul className="navigation__list">
                <li className={className}>
                  <a href="#">Coffee house</a>
                </li>
                <li className={className}>
                  <a href="#">Our coffee</a>
                </li>
                <li className={className}>
                  <a href="#">For your pleasure</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
