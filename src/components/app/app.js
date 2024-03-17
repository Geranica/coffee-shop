import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "../scroll-to-top/ScrollToTop";

import MainPage from "../pages/MainPage";
import OurCoffeePage from "../pages/OurCoffeePage";
import CoffeeCardPage from "../pages/CoffeeCardPage";
import ForYourPleasurePage from "../pages/ForYourPleasurePage";

import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";

import "./app.scss";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="wrapper">
        <header className="header">
          <Navigation />
        </header>
        <main className="page">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="our-coffee" element={<OurCoffeePage />} />
            <Route path="our-coffee/:id" element={<CoffeeCardPage />} />
            <Route path="for-your-pleasure" element={<ForYourPleasurePage />} />
          </Routes>
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
};

export default App;
