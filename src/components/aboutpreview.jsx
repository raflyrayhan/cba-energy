// src/components/aboutpreview.jsx
import React from "react";

export default function AboutPreview({ data }) {
  if (!data) return null;

  return (
    <section
      id="about-preview"
      style={{
        marginTop: "-100px",
        padding: "80px 0",
        background: "linear-gradient(to bottom, #FF9800,rgb(63, 62, 61))", // Orange gradient
      }}
    >
      <div className="container about-text" style={{ maxWidth: 1200, margin: "auto", marginBottom: "0px", textAlign: "justify", fontWeight: "500"
       }}>
        <h2 style={{ textAlign: "center", marginTop: -30 ,marginBottom: 20, color: "white"}}> Who We Are</h2>
        <p style={{ lineHeight: 1.6, marginBottom: 30, textAlign: "justify", fontSize: "16px", color: "white", width: "800", marginTop: "30px"}}>
          Formed in 2009 (and re-branded in 2013) as specialty supplier and contractor. Now built reputation with applying unique methods in supplying goods and service within energy related industry.
        </p>
        <p style={{ lineHeight: 1.6, marginBottom: 30, textAlign: "justify", fontSize: "16px", color: "white"}}>
          Work closely and formed strategic partnerships with numerous entities engineering center, worldwide manufacturers, fabricators and specific providers that offers specialized skills to cater specific needs.
        </p>
        <p style={{ lineHeight: 1.6, marginBottom: 30, textAlign: "justify", fontSize: "16px", color: "white"}}>
          Licensed to provide full range of project management, engineering, procurement and construction/support services locally.
        </p>
        <ul style={{ listStyleType: "square", paddingLeft: 20, marginTop: 20, maxWidth: "800" }}>
          <li style={{ marginBottom: 8, color: "white" }}>ISO 9001</li>
          <li style={{ marginBottom: 8, color: "white" }}>ISO 14001</li>
          <li style={{ marginBottom: 8, color: "white" }}>OHSAS 18001</li>
          <li style={{ marginBottom: 8, color: "white" }}>CSMS Certificate (on progress)</li>
          <li style={{ marginBottom: 8, color: "white" }}>SKT/SKUP Migas, CIVD SKKMigas, SBU/SIUJK large scale, NIK Importer</li>
        </ul>
        <p style={{ lineHeight: 1.6, marginBottom: 30, textAlign: "justify", fontSize: "16px", marginTop: 30, color: "white" }}>
          At <strong>CBA ENERGY</strong>, we are leveraging the best practices and transferable skills learnt from oil & gas business to provide high-quality products and services to a range of industries where the fundamentals of engineering, procurement, construction and delivery remain the same. 
        </p>
        <p style={{ lineHeight: 1.6, marginBottom: 30, textAlign: "justify", fontSize: "16px", color: "white" }}>
          We provide value-added, specialized products and services where we leverage our unrivalled capabilities to provide complex, engineered solutions to meet our customers' needs.
        </p>
        <p style={{ lineHeight: 1.6, marginBottom: 30, textAlign: "justify", fontSize: "16px", color: "white" }}>
          Our capability to provide end-to-end solutions – from engineering until plant maintenance activities – makes <strong>CBA ENERGY</strong> the partner of choice for customers across a broad range of industries from oil & gas to other heavy industries.
        </p>
        <div style={{ textAlign: "center", marginTop: 30 }}>
          <a
            href="/about"
            style={{
              display: "inline-block",
              padding: "10px 30px",
              backgroundColor: "white",
              color: "#F57C00",
              borderRadius: 7,
              textDecoration: "none",
              fontWeight: "bold",
              marginTop: "30px"
            }}
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}