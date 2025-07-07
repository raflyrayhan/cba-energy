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
        <div className="div1" style={{padding: "150px 40px", marginRight: "20px"}}>
          
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "20px", textAlign: "left" }}>
          Who We Serve
        </h2>
        <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "20px", textAlign: "left", fontWeight: 510 }}>
          From subsea to surface and concept to decommissioning, our technical expertise and strong partnerships provide energy related industries what they need to success 
        </p>
        <ul style={{ listStyle: "disc", padding: "0 10px", fontWeight: 510, fontSize: "18px" }}>
              <li style={{ marginBottom: "7px" }}>Oil & Gas – Upstream/Downstream</li>
              <li style={{ marginBottom: "7px" }}>Power & Renewables Energy</li>
              <li style={{ marginBottom: "7px" }}>Energy Transmission & Distribution</li>
            </ul>
         <a
            href="/services"
            style={{
              display: "inline-block",
              padding: "10px 30px",
              backgroundColor: "#ff9800",
              color: "#fff",
              borderRadius: 12,
              textDecoration: "none",
              marginTop: "30px",
              fontFamily: "sans-serif",
              fontWeight: "520"
            }}
          >
            See Our Services
          </a>
          </div>
        </div>
      </div>
      
    </section>
  );
}
