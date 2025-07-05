// src/pages/About.jsx
import React from "react";
import Header       from "../components/header";
import AboutPreview from "../components/aboutpreview";

export default function About({ data }) {
  if (!data) return null;

  return (
    <>
      <Header data={data.Header} />

      {/* full About detail */}
      <section style={{ padding:80, background:"#fff" }}>
        <div className="container" style={{ maxWidth:800, margin:"auto" }}>
          <h2>About Us</h2>
          <p>{data.paragraph}</p>
          <ul style={{ listStyleType:"disc", paddingLeft:20 }}>
            {data.Why2.map((item,i)=><li key={i}>{item}</li>)}
          </ul>
        </div>
      </section>
    </>
  );
}
