// src/pages/About.jsx
import React from "react";
import Header       from "../components/header";
import AboutPreview from "../components/aboutpreview";

export default function About({ headerData, aboutData }) {
  if (!headerData || !aboutData) return null;

  return (
    <>
      {/* Ini yang bikin banner muncul di About */}
      <Header data={headerData} />

      {/* Ini full detail About */}
      <section style={{ padding: 80, background: "#fff" }}>
        <div
          className="container"
          style={{ maxWidth: 800, margin: "auto" }}
        >
          <h2>About Us</h2>
          {aboutData.paragraph.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
            {aboutData.Why.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
