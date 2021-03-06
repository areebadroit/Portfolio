import React from "react";
import PortfolioItem from "./PortfolioItem";
import image1 from "./assets/img/portfolio/wordwrap.jpeg";
import image2 from "./assets/img/portfolio/game.png";
var link1 = "http://wrapword.herokuapp.com/blogs";
var link2 = "https://tictactoe-adr.netlify.com/";
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
          <PortfolioItem imageUrl={image1} weblink={ link1}/>
          {/* <!-- Portfolio Item 2--> */}
          <PortfolioItem imageUrl={image2} weblink ={link2} />
          {/* <!-- Portfolio Item 3--> */}
          {/* <PortfolioItem imageUrl={image3} /> */}
          {/* <!-- Portfolio Item 4--> */}
          {/* <PortfolioItem imageUrl={image4} /> */}
          {/* <!-- Portfolio Item 5--> */}
          {/* <PortfolioItem imageUrl={image5} /> */}
          {/* <!-- Portfolio Item 6--> */}
          {/* <PortfolioItem imageUrl={image6} /> */}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
