// src/components/aboutpreview.jsx
import React from "react";

export default function AboutPreview({ data }) {
  if (!data) return null;

  // anggap data memiliki field: data.title, data.paragraph, data.Why2 (array)
  const { paragraph, Why2 } = data;

  return (
    <section
      id="about-preview"
      style={{
        padding: "80px 0",
        background: "#fafafa"
      }}
    >
      <div className="container about-text" style={{ maxWidth: 800, margin: "auto" }}>
        <h2 style={{ textAlign: "center", marginTop: -30 ,marginBottom: 20, color: "black"}}>
          Who We Are
        </h2>
        <p style={{ lineHeight: 1.6, marginBottom: 30 }}>
          {paragraph}
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
          {Why2.map((item, idx) => (
            <li key={idx} style={{ marginBottom: 8 }}>
              {item}
            </li>
          ))}
        </ul>
        <div style={{ textAlign: "center", marginTop: 30 }}>
          <a
            href="/about"
            style={{
              display: "inline-block",
              padding: "10px 30px",
              backgroundColor: "#ff9800",
              color: "#fff",
              borderRadius: 4,
              textDecoration: "none"
            }}
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
