import { Component } from "react";

import Navigation from "../navigation/navigation";
import "./footer.scss";


class Footer extends Component {
  render() {
    return (
        <div className="container">
          <div className="footer__container">
          
          <Navigation navigationColor="black"/>
    
          </div>
        </div>
    );
  }
}

export default Footer;