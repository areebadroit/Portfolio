import React from "react";
import Masthead from "./Masthead";
import Navbar from "./navbar";
import PortfolioSection from "./PortfolioSection";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Masthead />
      <PortfolioSection />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
