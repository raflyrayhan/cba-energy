// src/pages/Service.jsx
import React from "react";
import Header          from "../components/header";
import ServicePreview  from "../components/servicepreview";

export default function Service({ data }) {
  if (!data) return null;

  return (
    <>
      <Header data={data.Header} />

      {/* full Services detail */}
      <section style={{ padding:80, background:"#fafafa" }}>
        <div className="container" style={{ maxWidth:800, margin:"auto" }}>
          <h2>Our Services</h2>
          {data.map((svc,i)=>(
            <div key={i} style={{ marginBottom:20 }}>
              <h3>{svc.title}</h3>
              <p>{svc.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
