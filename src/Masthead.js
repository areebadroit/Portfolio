import React from "react";

import avatar from "./assets/img/avatar.png";

const Masthead = () => (
  <header className="masthead bg-primary text-white text-center">
    <div className="container d-flex align-items-center flex-column">
      <img className="masthead-avatar mb-5" src={avatar} alt="..." />
      <h1 className="masthead-heading text-uppercase mb-0">Hi, I am Areeb</h1>
      <h3 className="masthead-heading text-uppercase mb-0"></h3>
      <div className="divider-custom divider-light">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <i className="fas fa-star"></i>
        </div>
        <div className="divider-custom-line"></div>
      </div>
      <p className="masthead-subheading font-weight-light mb-0">
        Software Engineer
      </p>
    </div>
  </header>
);

export default Masthead;
