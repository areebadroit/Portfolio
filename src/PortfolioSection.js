import React from "react";
import PortfolioItem from "./PortfolioItem";
import image1 from "./assets/img/portfolio/cabin.png";
import image2 from "./assets/img/portfolio/cake.png";
import image3 from "./assets/img/portfolio/circus.png";
import image4 from "./assets/img/portfolio/game.png";
import image5 from "./assets/img/portfolio/safe.png";
import image6 from "./assets/img/portfolio/submarine.png";
const PortfolioSection = () => {
  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        {/* <!-- Portfolio Section Heading--> */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Portfolio
        </h2>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* <!-- Portfolio Grid Items--> */}
        <div className="row justify-content-center">
          {/* <!-- Portfolio Item 1--> */}
          <PortfolioItem imageUrl={image1} />
          {/* <!-- Portfolio Item 2--> */}
          <PortfolioItem imageUrl={image2} />
          {/* <!-- Portfolio Item 3--> */}
          <PortfolioItem imageUrl={image3} />
          {/* <!-- Portfolio Item 4--> */}
          <PortfolioItem imageUrl={image4} />
          {/* <!-- Portfolio Item 5--> */}
          <PortfolioItem imageUrl={image5} />
          {/* <!-- Portfolio Item 6--> */}
          <PortfolioItem imageUrl={image6} />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
