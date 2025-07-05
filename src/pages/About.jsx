// src/pages/About.jsx
import React from "react";
import Header from "../components/header";

export default function AboutPage() {
  const accent = "#FF9800";
  const accentLight = "#FFF3E0";

  // data inline untuk Header
  const headerData = {
    com: "PT. CAHAYA BUMI ABADI",
    title: "DELIVERING OIL & GAS, POWER, AND RENEWABLE ENERGY PROJECTS",
    paragraph: "From engineering design to turnkey delivery with OHSE commitment.",
  };

  // helper untuk membuat judul section
  const SectionTitle = ({ children }) => (
    <div style={{
      width: "100%",
      textAlign: "center",
      marginBottom: 24,
    }}>
      <span style={{
        display: "inline-block",
        backgroundColor: accent,
        color: "#fff",
        padding: "8px 24px",
        borderRadius: 4,
        fontSize: 24,
        fontWeight: 600,
      }}>
        {children}
      </span>
    </div>
  );

  // helper untuk judul sub-section
  const SubTitle = ({ children }) => (
    <div style={{
      width: "100%",
      textAlign: "center",
      margin: "32px auto 16px",
    }}>
      <span style={{
        display: "inline-block",
        backgroundColor: accentLight,
        color: accent,
        padding: "6px 16px",
        borderRadius: 3,
        fontSize: 20,
        fontWeight: 500,
      }}>
        {children}
      </span>
    </div>
  );

  // wrapper untuk konten per section
  const Section = ({ bg = "#fff", children }) => (
    <section style={{
      width: "100%",
      background: bg,
      padding: "80px 0",
    }}>
      <div style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "0 16px",
      }}>
        {children}
      </div>
    </section>
  );

  const commonListStyle = {
    listStyleType: "disc",
    paddingLeft: 24,
    lineHeight: 1.7,
    marginBottom: 24,
  };

  return (
    <>
      {/* Quality & HSE */}
      <Section bg="#fafafa">
        <SectionTitle>Quality & HSE</SectionTitle>
        <ul style={commonListStyle}>
          <li>A courage to make a breakthrough…</li>
          <li>At CBA ENERGY, we believe that maintaining the highest quality standards…</li>
          <li>The objective of our Quality and HSE Policy is not only to satisfy, but also to exceed…</li>
          <li>The Quality & HSE Management System is continuously reviewed to keep pace…</li>
          <li>We believe that business success depends on our ability to continually improve…</li>
          <li>We are a company certified to ISO 9001:2008, ISO 14001:2009 and OHSAS 18001:2007.</li>
        </ul>
      </Section>

      {/* Core Value */}
      <Section bg="#fff">
        <SectionTitle>Core Value</SectionTitle>
        <ul style={commonListStyle}>
          <li>Our vision is to be acknowledged by our customers…</li>
          <li>We constantly strive to improve the efficiency of our business…</li>
          <li>Our mission is to meet the expectations of our customers…</li>
        </ul>
        <p style={{ lineHeight: 1.7, marginBottom: 0 }}>
          CBA ENERGY has refocused its business portfolio to deliver solutions…
        </p>
      </Section>

      {/* Unique Profile */}
      <Section bg={accentLight}>
        <SectionTitle>Unique Profile</SectionTitle>
        <p style={{ lineHeight: 1.7, marginBottom: 24 }}>
          The fact is that CBA ENERGY is all of the above. CBA ENERGY provide…
        </p>
        <ul style={commonListStyle}>
          <li>Provides customers with a specific and/or generic design engineering</li>
          <li>Performs specific and/or generic fabricated items</li>
          <li>Supplies specialty engineered goods</li>
          <li>Deliver a specific scope of work as required by customer requirements</li>
        </ul>
      </Section>

      {/* Key Differentiators */}
      <Section bg="#fff">
        <SectionTitle>Key Differentiators</SectionTitle>
        <ul style={commonListStyle}>
          <li>We take the time to listen, question and understand customer’s needs…</li>
          <li>We strong believe that relationships with customers unlocks value…</li>
          <li>
            <strong>Our people</strong><br/>
            We aim to draw out people from the best talent and develop them…
          </li>
          <li>
            <strong>Our knowledge</strong><br/>
            Our worldwide network of industry sector specialists are linked by…
          </li>
        </ul>
      </Section>

      {/* Our Strategy */}
      <Section bg={accentLight}>
        <SectionTitle>Our Strategy</SectionTitle>

        <SubTitle>Local Presence, Global Support and Expertise</SubTitle>
        <p style={{ lineHeight: 1.7 }}>
          CBA ENERGY’s strategic success begins, and ends, with our customers…
        </p>

        <SubTitle>Customer Engagement</SubTitle>
        <p style={{ lineHeight: 1.7, marginBottom: 16 }}>
          CBA ENERGY recognizes the importance of providing the best total solution…
        </p>
        <ul style={commonListStyle}>
          <li>Early engagement and validation with an account management team…</li>
          <li>Partnering with other leading organizations in complementary sectors…</li>
          <li>Investing in local infrastructure and integration of our local team.</li>
        </ul>

        <SubTitle>Operational Excellence</SubTitle>
        <p style={{ lineHeight: 1.7 }}>
          CBA ENERGY strives to achieve operational excellence and the lowest costs…
        </p>

        <SubTitle>Best Overall Solution</SubTitle>
        <p style={{ lineHeight: 1.7, marginBottom: 0 }}>
          CBA ENERGY strives to provide the best overall project solution to our customers…
        </p>
      </Section>
    </>
  );
}
