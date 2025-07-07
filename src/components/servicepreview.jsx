// src/components/servicepreview.jsx
import React from "react";

export default function ServicePreview({ data }) {
  if (!data) return null;

  return (
    <section
      id="services-preview"
      style={{
        position: "relative",
        padding: "100px 0",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        marginTop: "0px"
      }}
    >
      {/* Background Image */}
      <img
        src="img/header-image-serve.jpg" // Replace with your image path
        alt="Background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          opacity: 1, // Adjust opacity as needed
        }}
      />

      {/* Content Overlay */}
      <div className="img-overlay-service"
          style={{
          marginTop: "-100px",
          maxHeight: "100%",
          maxWidth: "100%",
          padding: "0 40px",
          color: "white",
          zIndex: 1,
          marginBottom: "-100px"
        }}
          >
      <div className="parent">
        <div className="div1" style={{padding: "125px 40px", marginRight: "20px"}}>
          
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "20px", textAlign: "left" }}>
          Who We Serve
        </h2>
        <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "20px", textAlign: "left", fontWeight: 510 }}>
          From subsea to surface and concept to decommissioning, our technical expertise and strong partnerships provide energy related industries what they need to success 
        </p>
        <p style={{ fontSize: "18px", lineHeight: "1.6", textAlign: "left", fontWeight: 510 }}>
          Our capability to provide end-to-end solutions – from engineering until plant maintenance activities – makes CBA ENERGY the partner of choice for customers across a broad range of industries from oil & gas to other heavy industries.
        </p>
        <a
            href="/about"
            style={{
              display: "inline-block",
              padding: "10px 30px",
              backgroundColor: "#ff9800",
              color: "#fff",
              borderRadius: 4,
              textDecoration: "none",
              marginTop: "30px"
            }}
          >
            Read More
          </a>
          </div>
        </div>
      </div>
      
    </section>
  );
}
