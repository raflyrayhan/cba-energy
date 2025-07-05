// src/pages/Home.jsx
import React from "react";
import Header          from "../components/header";
import AboutPreview    from "../components/aboutpreview";
import ServicePreview  from "../components/servicepreview";

export default function Home({ headerData, aboutData, serviceData }) {
  return (
    <>
      {/* Hero */}
      <Header data={headerData} />

      {/* About snippet */}
      <AboutPreview data={aboutData} />

      {/* Services snippet */}
      <ServicePreview data={serviceData} />
    </>
  );
}
