// src/components/Footer.jsx
import React, { useState } from "react";

export default function Footer() {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState(false);

  return (
    <footer style={{ backgroundImage: "linear-gradient(to bottom, rgba(255, 255, 255, 1),rgba(254, 228, 144, 0.25))", padding: "3rem 2rem" }}>
      <div className="container">
        <div className="row" style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="col-md-2">
            <div style={{ position: "relative" }}>
              <h3 
                style={{ marginBottom: "1rem", fontWeight: "bold", color: "navy" }}
              >
                Products
              </h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
               <li style={{ marginBottom: "10px", color:"orange", fontWeight: "600" }}>Integrated Steel</li>
                  <li style={{ marginBottom: "10px", color:"orange", fontWeight: "600" }}>Engineered Items</li>
                  <li style={{ marginBottom: "10px", color:"orange", fontWeight: "600" }}>Package Modular</li>
              </ul>
            </div>
            <div style={{ position: "relative" }}>
              <h3 
                style={{ marginBottom: "1rem",fontWeight: "bold", color: "navy" }}
              >
                Experience
              </h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
               <li style={{ marginBottom: "10px", color:"orange", fontWeight: "600" }}>Closed Projects List</li>
               <li style={{ marginBottom: "10px", color:"orange", fontWeight: "600" }}>Projects Gallery</li>
              </ul>
            </div>
          </div>

           <div className="col-md-2">
            <div style={{ position: "relative" }}>
              <h3 
                style={{ marginBottom: "1rem",fontWeight: "bold", color: "navy" }}
              >
                Partners
              </h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
               <li style={{ marginBottom: "10px", color:"orange" , fontWeight: "600"}}>Integrated Steel Manufacturers</li>
                  <li style={{ marginBottom: "10px", color:"orange", fontWeight: "600" }}>OEM Manufacturers</li>
                  <li style={{ marginBottom: "10px", color:"orange", fontWeight: "600" }}>Supporting Services-Local</li>
                  <li style={{ marginBottom: "10px", color:"orange", fontWeight: "600"}}>Supporting Services-Global</li>
              </ul>
            </div>
          </div>

          <div className="col-md-2">
            <h3 style={{ marginBottom: "1rem",fontWeight: "bold", color: "navy" }}>About Us</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "10px", color:"orange", fontWeight: "600" }}>Quality & HSE</li>
              <li style={{ marginBottom: "10px", color:"orange", fontWeight: "600" }}>Core Value</li>
              <li style={{ marginBottom: "10px", color:"orange", fontWeight: "600" }}>Unique Profile</li>
              <li style={{ marginBottom: "10px", color:"orange", fontWeight: "600" }}>Key Differentiators</li>
              <li style={{ marginBottom: "10px", color:"orange", fontWeight: "600" }}>Our Strategy</li>
            </ul>
          </div>

          <div className="col-md-3">
             <img 
              src="img/CBA_logo_fonted.png" 
              alt="CBA Logo" 
              style={{ maxWidth: "45%", padding: "0 0", margin: "0 0"}} 
            />
            <h3 style={{ marginBottom: "1rem",fontWeight: "bold", color: "navy" }}>Contact Us</h3>
            <p style={{ marginBottom: "1rem", color:"orange", fontWeight: "600" }}>P: +6221 576 1725 (hunting)</p>
            <p style={{ marginBottom: "1rem", color:"orange", fontWeight: "600" }}>F: +6221 576 2581</p>
            <p style={{ marginBottom: "1rem", color:"orange", fontWeight: "600" }}>Whatsapp: +62811 1013 5360</p>
            <p style={{ marginBottom: "1rem", color:"orange", fontWeight: "600" }}>E-mail: sales@cba-energy.com</p>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "30px", borderTop: "1px solid rgba(255, 255, 255, 0.2)", padding: "1rem 0" }}>
        <p style={{ textAlign: "center", fontSize: "14px" , color:"orange" }}>
          © 2025 CBA Energy | Website by Infimech
        </p>
      </div>
    </footer>
  );
}