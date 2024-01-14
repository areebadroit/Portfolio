import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const sendDataToBackend = async (data) => {
    try {
      const requestBody = JSON.stringify(data);
      // Example headers for the request
      const headers = {
        "Content-Type": "application/json",
      };
      // Example POST request
      await axios
        .post(process.env.REACT_APP_BACKEND_URL, requestBody, { headers })
        .then(function (response) {
          console.log("Response:", response.data);
        })
        .catch(function (error) {
          console.error("Error:", error);
        });
    } catch (error) {
      // Handle network or other errors
      console.error("Error:", error);
    }
  };
  const [formData, setFormData] = useState({
    fullname: "",
    emailId: "",
    contactNumber: "",
    message: "",
  });
  const handleInputChange = (e) => {
    // Update the state when input values change
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call a function to send the data to the backend
    sendDataToBackend(formData);
  };
  return (
    <section className="page-section" id="contact">
      <div className="container">
        {/* <!-- Contact Section Heading--> */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Contact Me
        </h2>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* <!-- Contact Section Form--> */}
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            <form id="contactForm" onSubmit={handleSubmit}>
              {/* <!-- Name input--> */}
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Enter your name..."
                  data-sb-validations="required"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleInputChange}
                  required
                />
                <label for="name">Full name</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="name:required"
                >
                  A name is required.
                </div>
              </div>
              {/* <!-- Email address input--> */}
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  data-sb-validations="required,email"
                  name="emailId"
                  value={formData.emailId}
                  onChange={handleInputChange}
                  required
                />
                <label for="email">Email address</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="email:required"
                >
                  An email is required.
                </div>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="email:email"
                >
                  Email is not valid.
                </div>
              </div>
              {/* <!-- Phone number input--> */}
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  data-sb-validations="required"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                />
                <label for="phone">Phone number</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="phone:required"
                >
                  A phone number is required.
                </div>
              </div>
              {/* <!-- Message input--> */}
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="message"
                  type="text"
                  placeholder="Enter your message here..."
                  style={{ height: "10rem" }}
                  data-sb-validations="required"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
                <label for="message">Message</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="message:required"
                >
                  A message is required.
                </div>
              </div>
              {/* <!-- Submit success message-->
                            <!---->
                            <!-- This is what your users will see when the form-->
                            <!-- has successfully submitted--> */}
              <div className="d-none" id="submitSuccessMessage">
                <div className="text-center mb-3">
                  <div className="fw-bolder">Form submission successful!</div>
                  To activate this form, sign up at
                  <br />
                  <a href="https://startbootstrap.com/solution/contact-forms">
                    https://startbootstrap.com/solution/contact-forms
                  </a>
                </div>
              </div>
              {/* <!-- Submit error message--> */}
              {/* <!---->
                            <!-- This is what your users will see when there is--> */}
              {/* <!-- an error submitting the form--> */}
              <div className="d-none" id="submitErrorMessage">
                <div className="text-center text-danger mb-3">
                  Error sending message!
                </div>
              </div>
              {/* <!-- Submit Button--> */}
              <button
                className="btn btn-primary btn-xl"
                id="submitButton"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
