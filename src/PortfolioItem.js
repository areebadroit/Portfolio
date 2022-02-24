import React from "react";

const PortfolioItem = ({ imageUrl,weblink }) => (
  <div className="col-md-6 col-lg-4 mb-5">
    <div
      className="portfolio-item mx-auto"
      data-bs-toggle="modal"
      data-bs-target="#portfolioModal1"
    >
      <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
        <a href={weblink} target="_blank" className="portfolio-item-caption-content text-center text-white">
          <i className="fas fa-plus fa-3x"></i>
        </a>
      </div>
      <img className="img-fluid" src={imageUrl} alt="..." />
    </div>
  </div>
);

export default PortfolioItem;
