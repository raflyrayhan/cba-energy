// src/components/Footer.jsx
import React, { useState } from "react";

export default function Footer() {
  const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);

  return (
    <footer style={{ backgroundImage: "linear-gradient(180deg, rgba(232, 128, 2, 1), rgb(44, 38, 33))", color: "white", padding: "20px 0" }}>
      <div className="container">
        <div className="row" style={{ display: "flex", justifyContent: "space-between" }}>
          {/* Column 1: Our Products with Dropdown */}
          <div className="col-md-2">
            <div style={{ position: "relative" }}>
              <h3 
                style={{ marginBottom: "20px" }}
              >
                Our Products
              </h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
               <li style={{ marginBottom: "10px" }}>Integrated Steel</li>
                  <li style={{ marginBottom: "10px" }}>Engineered Items</li>
                  <li style={{ marginBottom: "10px" }}>Package Modular</li>
              </ul>
            </div>
          </div>

          {/* Column 2: Services & Solutions */}
          <div className="col-md-2">
            <h3 style={{ marginBottom: "20px" }}>Services</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "10px" }}>Engineering</li>
              <li style={{ marginBottom: "10px" }}>Fabrication</li>
              <li style={{ marginBottom: "10px" }}>Procurement</li>
              <li style={{ marginBottom: "10px" }}>Construction</li>
            </ul>
          </div>

          {/* Column 3: About Us */}
          <div className="col-md-2">
            <h3 style={{ marginBottom: "20px" }}>About Us</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "10px" }}>History</li>
              <li style={{ marginBottom: "10px" }}>Innovation</li>
              <li style={{ marginBottom: "10px" }}>Experience</li>
            </ul>
          </div>

          {/* Column 5: Contact Us */}
          <div className="col-md-3" style={{marginRight: "30px"}}>
            <h3 style={{ marginBottom: "20px" }}>Contact Us</h3>
            <p style={{ marginBottom: "10px" }}>P: +6221 576 1725 (hunting)</p>
            <p style={{ marginBottom: "10px" }}>F: +6221 576 2581</p>
            <p style={{ marginBottom: "10px" }}>sales@cba-energy.com</p>
          </div>

          {/* Column 6: Logo */}
          <div className="col-md-1">
            <img 
              src="img/CBA_logo.png" 
              alt="CBA Logo" 
              style={{ maxWidth: "230%", marginTop: "30px", marginLeft: "-60px" }} 
            />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container" style={{ marginTop: "30px", borderTop: "1px solid rgba(255, 255, 255, 0.2)", padding: "20px 0" }}>
        <p style={{ textAlign: "center", fontSize: "14px" }}>
          © 2025 PT. Cahaya Bumi Abadi | Website by Infimech
        </p>
      </div>
    </footer>
  );
}