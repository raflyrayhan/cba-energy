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
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
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
                  <i className="fa fa-map-marker"></i> Address
                </span>
                <a href="https://www.google.com/maps/place/Infimech+Technology/@-7.9650691,112.6419129,19z/data=!3m1!4b1!4m6!3m5!1s0x2dd6290f90b7ffa3:0xe6b093e624971e27!8m2!3d-7.9650704!4d112.6425566!16s%2Fg%2F11t2vb9wdp?entry=tts&g_ep=EgoyMDI0MTExOC4wIPu8ASoASAFQAw%3D%3D" target="_blank"
                rel="noopener noreferrer"
                className="address-link">
                {props.data ? props.data.address1 : "loading"}
                </a>
                <br />
                <br />
                 <a href="https://www.google.com/maps/place/Karawaci+Office+Park/@-6.222983,106.6160268,17z/data=!4m7!3m6!1s0x2e69fea841be47ab:0xfe577b3218678e23!8m2!3d-6.222983!4d106.6186017!15sCk1PZmZpY2UgUGFyayBLYXJhd2FjaSBSdWtvIFBpbmFuZ3NpYSBTZWxhdGFuIEJsb2sgRi83MiBUYW5nZXJhbmcsIEJhbnRlbiAxNTEzOJIBEGNvcnBvcmF0ZV9vZmZpY2XgAQA!16s%2Fg%2F11cmscy8lg?entry=tts&g_ep=EgoyMDI0MTExOS4yIPu8ASoASAFQAw%3D%3D" target="_blank"
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
                      <a href= "https://www.linkedin.com/company/infimech-id/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/infimech/" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://wa.me/6282130840365" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-whatsapp"></i>
                      </a>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2025 PT. Infimech Harmoni Teknologi.
          </p>
        </div>
      </div>
    </div>
  );
};
