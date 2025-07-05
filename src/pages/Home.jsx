// src/pages/Home.jsx
import React from "react";
import Header          from "../components/header";
import AboutPreview    from "../components/aboutpreview";
import ServicePreview  from "../components/servicepreview";

export default function Home({
  headerData,
  aboutPreviewData,
  servicesPreviewData
}) {
  return (
    <>
      <Header data={headerData} />
      <AboutPreview data={aboutPreviewData} />
      <ServicePreview data={servicesPreviewData} />
    </>
  );
}
