import React, { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      id="menu"
      className={`navbar navbar-default navbar-fixed-top ${scrolled ? "scrolled" : "transparent"}`}
    >
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="/">
            <img src="img/CBA_logo.png" className="logo-img" alt="CBA Logo" />
          </a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="/" className="page-scroll">Home</a></li>

            <li className="dropdown">
              <a
                href="/about"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li><a href="/about">Who We Are</a></li>
                <li><a href="#">Legal Certification</a></li>
              </ul>
            </li>

            <li className="dropdown">
              <a
                href="/experience"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Experience <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li><a href="/experience">Project List</a></li>
                <li><a href="/experience#client-feedback">Project Gallery</a></li>
                <li><a href="/experience#region-map">On Going Projects</a></li>
              </ul>
            </li>

            <li><a href="/products" className="page-scroll">Products</a></li>
            <li><a href="/partners" className="page-scroll">Partners</a></li>
            <li><a href="/contact" className="page-scroll">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
