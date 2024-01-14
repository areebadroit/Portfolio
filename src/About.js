import React, { useState, useEffect } from "react";

const About = () => {
  const [resumeURL, setresumeURL] = useState("");
  useEffect(() => {
    // Calling setResumeURL here won't cause issues
    setresumeURL(process.env.REACT_APP_RESUME_URL);
  }, []);
  return (
    <section className="page-section bg-primary text-white mb-0" id="about">
      <div className="container">
        {/* <!-- About Section Heading--> */}
        <h2 className="page-section-heading text-center text-uppercase text-white">
          About
        </h2>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* <!-- About Section Content--> */}
        <div className="row">
          <div className="col-lg-4 ms-auto">
            <p className="lead">
              A Dynamics 365 CE and Power Platform Professional with around two
              years of experience in Solution Customisation, Configuration and
              Designing both from Functional and Technical Perspective
            </p>
          </div>
          <div className="col-lg-4 me-auto">
            <p className="lead">
              {" "}
              I also have a great alignment towards Data Structures and
              Algorithms, Problem Solving, MERN Stack Web Development and Core
              Computer Science Skills.
            </p>
          </div>
          <p className="text-center mt-2 lead">
            I believe “Every Challenge is just a Problem to Solve.”{" "}
          </p>
        </div>
        {/* <!-- About Section Button--> */}
        <div className="text-center mt-4">
          <a
            style={{ margin: "5px" }}
            className="btn btn-xl btn-outline-light"
            href={resumeURL}
            target="_blank"
          >
            <i className="fas fa-download me-2"></i>
            Resume
          </a>
          {/* <a style={{margin:"5px"}} className="btn btn-xl btn-outline-light" href="" target="_blank">
                        <i className="fas fa-download me-2"></i>
                        General Resume
                    </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
