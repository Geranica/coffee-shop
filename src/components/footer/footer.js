import Navigation from "../navigation/navigation";

import blackLogo from "./images/Beans logo.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer__container container">
      <Navigation navigationColor="black" />
      <img className="footer__logo" src={blackLogo} alt="logo_beans_black" />
    </div>
  );
};

export default Footer;
