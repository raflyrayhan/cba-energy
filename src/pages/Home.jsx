// src/pages/Home.jsx
import React from "react";
import Header from "../components/header";
import AboutPreview from "../components/aboutpreview";
import Contact from "../components/contact";
import JsonData from "../data/data.json"
import ProductPreview from "../components/productpreview";

export default function Home({contactData}) {
  return (
    <>
      <Header data={JsonData.header} />
      <AboutPreview data={JsonData.about} />
      <ProductPreview />
      <Contact data={contactData} />
    </>
  );
}