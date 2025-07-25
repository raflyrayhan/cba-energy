import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";


const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    // eslint-disable-next-line no-lone-blocks
    {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }
    
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch With Us!</h2>
                <p>
                 Fill out the form below to send us an email and we will
                  get back to you.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Find Us Here!</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Office
                </span>
                <a href="https://maps.app.goo.gl/W68d3h57ZGbdyT9C8" target="_blank"
                rel="noopener noreferrer"
                className="address-link">
                {props.data ? props.data.address1 : "loading"}
                </a>
                <br />
                <br />
                <i className="fa fa-map-marker"></i> Fabrication Shop
                <span/>
                 <a href="https://maps.app.goo.gl/8tFjXQbYXC7mbzTH6" target="_blank"
                rel="noopener noreferrer"
                className="address-link">
                {props.data ? props.data.address2 : "loading"}
                </a>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
                <span></span>
                {props.data ? props.data.phone2 : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                 <li>
                      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/cahaya_bumi_abadi/" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://wa.me/62215762581" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-whatsapp"></i>
                      </a>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="product-footer" style={{marginTop: "0"}}>
        <div className="product-footer__inner">
          <p>© 2025 CBA Energy | Website by Infimech</p>
        </div>
      </footer>
    </div>
  );
};
