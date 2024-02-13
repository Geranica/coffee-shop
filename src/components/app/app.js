import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainPage from "../pages/MainPage";
import OurCoffeePage from "../pages/OurCoffeePage";

import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";

import "./app.scss";

const App = () => {

  return (
    <Router>
      <div className="wrapper">
        <header className="header">
          <Navigation />
        </header>
        <main className="page">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/our-coffee" element={<OurCoffeePage />} />
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
