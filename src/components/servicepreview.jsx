// src/components/servicepreview.jsx
import React from "react";

export default function ServicePreview({ data }) {
  if (!data) return null;

  return (
    <section
      id="services-preview"
      style={{
        padding: "80px 0",
        background: "#fff"
      }}
    >
      <div className="container" style={{ maxWidth: 800, margin: "auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>
          Our Services
        </h2>
        <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
          {data.map((svc, i) => (
            <li key={i} style={{ marginBottom: 8 }}>
              {svc.title}
            </li>
          ))}
        </ul>
        <div style={{ textAlign: "center", marginTop: 30 }}>
          <a
            href="/services"
            style={{
              display: "inline-block",
              padding: "10px 30px",
              backgroundColor: "#ff9800",
              color: "#fff",
              borderRadius: 4,
              textDecoration: "none"
            }}
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
}
