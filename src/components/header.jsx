// src/components/Header.jsx
import React from "react";

export default function Header({ data }) {
  if (!data) return null;

  const headerImage1 = [
    "img/headerpic1.jpg"
  ];
  const headerImage2 = [
    "img/headerpic2.jpg"
  ];
  const headerImage3 = [
    "img/headerpic3.jpeg"
  ];
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="parent">
            <div className="div1">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h2>{data?.com ?? "Loading…"}</h2>
                <h1>
                  {data?.title ?? "Loading…"}
                  <span></span>
                </h1>
                <p>{data?.paragraph ?? "Loading…"}</p>
                <a href="#about-preview" className="btn btn-custom btn-lg page-scroll">
                  More About Us
                </a>
              </div>
            </div>

           
            <div className="div2">
              <img
                src={headerImage1}
                className="header-img"
                alt="Header visual 1"
              />
              <img
                src={headerImage2}
                className="header-img"
                alt="Header visual 2"
                style={{ marginTop: -60, marginLeft: 150 }}
              />
              <img
                src={headerImage3}
                className="header-img"
                alt="headerimg"
                style={{ marginTop: -85, maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}