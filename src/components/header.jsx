// src/components/header.jsx
import React from "react";
import "./header.css";

export default function Header({ data }) {
  if (!data) return null;

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="intro-text-container">
            <h2 className="intro-com">{data.com}</h2>
            <h1 className="intro-title">{data.title}</h1>
            <p className="intro-paragraph">{data.paragraph}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
