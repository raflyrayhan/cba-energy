// src/components/AboutHeader.jsx
import React from "react";

export default function AboutHeader() {
  return (
    <header style={{ 
      background: "linear-gradient(to right, #E65100, #FF8F00)", // Darker orange gradient
      color: "white",
      padding: "40px 0 60px", // Increased padding for taller header
      textAlign: "center"
    }}>
      <div className="container">
        <h1 style={{ margin: "0 0 10px", marginTop: "70px" }}>About Us</h1>
        <p style={{ fontSize: "18px", marginBottom: 0 }}>
          Learn more about our company and our values
        </p>
      </div>
    </header>
  );
}