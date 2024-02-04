import { Component } from "react";

import Navigation from "../navigation/navigation";
import Main from "../main/main";
import AboutUs from "../about-us/about-us";
import OurBest from "../our-best/our-best";
import Footer from "../footer/footer";

import "./app.scss";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <header className="header">
          <Navigation />
        </header>
        <main className="page">
          <Main />
          <AboutUs />
          <OurBest />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
