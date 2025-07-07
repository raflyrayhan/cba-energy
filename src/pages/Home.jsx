// src/pages/Home.jsx
import React from "react";
import Header from "../components/header";
import AboutPreview from "../components/aboutpreview";
import ServicePreview from "../components/servicepreview";
import Contact from "../components/contact";

export default function Home({ headerData, aboutPreviewData, servicesPreviewData, contactData }) {
  return (
    <>
      <Header data={headerData} />
      <AboutPreview data={aboutPreviewData} />
      <ServicePreview data={servicesPreviewData} />
      <Contact data={contactData} />
    </>
  );
}