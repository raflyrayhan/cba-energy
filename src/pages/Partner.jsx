import React from "react";
import { Gallery } from "../components/gallery";
import JsonData from "../data/data.json";
import "./partnerpage.css";

const partnerCategories = [
  {
    title: "Integrated Steels",
    items: [
      "ArcelorMittal",
      "ThyssenKrupp Materials",
      "Metal One (Mitsubishi)",
      "Kanematsu",
      "Benoit",
      "KHB Tech",
      "Butting",
    ],
  },
  {
    title: "OEM Manufacturers",
    items: [
      "Hydratight",
      "Imodco Terminals (SBM)",
      "Parker EPD & Scanrope",
      "Magma Global",
      "Emstec",
      "MIR Valve",
      "MHI Power Generators",
      "ACE Winches",
      "Heila Cranes",
      "McGregor",
      "EMS Energy",
      "Climeon",
      "Laiwu Anchor",
    ],
  },
  {
    title: "Supporting Services – Local",
    items: [
      "Depriwangga Engineering",
      "3S Engineering",
      "Techno Orbit Particle Filtration",
      "Lintech Duta Pratama",
      "Elnusa Fabrikasi Konstruksi",
      "Bredero Shaw"
    ],
  },
  {
    title: "Supporting Services – Global",
    items: [
      "Imodco Terminals (SBM)",
      "GLE",
      "Verkis",
      "AG Equipment Company"
    ],
  },
];

export default function Partner() {
return(

    <main>
        <Gallery data={JsonData.Gallery} />
        <p style={{textAlign: "center", color: "#FF6600", fontWeight: "500", fontSize: "2rem"}}>
            Most of our partner relationships are long term and enduring.
        </p>
<div className="partners-grid">
        {partnerCategories.map((cat, idx) => (
          <div className="partner-card" key={idx}>
            <h3>{cat.title}</h3>
            <ul>
              {cat.items.map((name, i) => (
                <li key={i}>{name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <footer className="product-footer">
        <div className="product-footer__inner">
          <p>© 2025 CBA Energy | Website by Infimech</p>
        </div>
      </footer>
</main>
    );
}