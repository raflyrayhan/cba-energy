import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./AboutPage.css";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const listContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const listItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function AboutPage() {
 
  const coreItems = [
    {
      lead: "Be recognized by customers, employees, and shareholders",
      rest: "as the premier strategic partner.",
    },
    {
      lead: "Continuously boost efficiency",
      rest: "through people development and technological innovation.",
    },
    {
      lead: "Exceed customer and shareholder expectations",
      rest: "by building a capable, creative company.",
    },
  ];

  const uniqueItems = [
    "Provides customers with specific and/or generic design engineering",
    "Performs specific and/or generic fabricated items",
    "Supplies specialty engineered goods",
    "Delivers a specific scope of work as required by customer requirements",
  ];

  const strategyItems = [
    "Early engagement and validation with an account management team who combines technical expertise with affiliate companies within our group.",
    "Partnering with other leading organizations in complementary sectors to provide packaged solutions.",
    "Investing in local infrastructure and integration of our local team.",
  ];
 const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 30;
      const fadeEnd = 300;
      const newOpacity =
        1 - Math.min(Math.max((scrollY - fadeStart) / (fadeEnd - fadeStart), 0), 1);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main id="about-page" className="about-container">
      {/* Hero Section */}
       <motion.section className="hero-banner" initial="hidden" whileInView="visible"viewport={{ once: true }} variants={sectionVariants}>
        <div className="hero-overlay">
          <div className="text-overlay"  style={{ opacity }}> 
          <div className="hero-text" style={{ opacity }}>
            <h1 className="hero-title" style={{color:"navy"}}>About <img src="img/CBA_logo_fonted.png" alt="cba_logo" style={{maxWidth: "12%"}}/></h1>
            <p className="hero-subtitle">
              Your trusted partner in energy innovation, quality & safety.
            </p>
            </div>
          </div>
        </div>
      </motion.section>
        
      {/* QUALITY & HSE */}
      <section
        className="quality-card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2>
          <span className="highlight-orange">QUALITY</span>{" "}
          <span className="amp">&amp;</span>{" "}
          <span className="highlight-navy">HSE</span>
        </h2>
        <p>
          <b className="highlight-orange">CBA</b>{" "}
          <b className="highlight-navy">Energy</b> drives future-focused innovation with uncompromising quality and a{" "}
          <b>zero-harm</b> HSE culture, continuously improving our management system and holding{" "}
          <b>ISO 9001:2008, ISO 14001:2009, and OHSAS 18001:2007</b> certifications.
        </p>
        <img src="img/iso.png" alt="ISO Certifications" className="iso-img" />
      </section>

      {/* CORE VALUE */}
      <section
        className="quality-card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2>
          <span className="highlight-orange">CORE</span>{" "}
          <span className="highlight-navy">VALUE</span>
        </h2>
        {coreItems.map(({ lead, rest }, i) => (
          <div key={i} className={`core-card ${i % 2 ? "reverse" : ""}`}>
            <div className="core-text" variants={sectionVariants}>
              <p style={{ color: "black" }}>
                <strong>{lead}</strong> {rest}
              </p>
            </div>
            <div className="core-img">
              <img src="img/core_value.png" alt="Core Value" />
            </div>
          </div>
        ))}
      </section>

      {/* UNIQUE PROFILE */}
      <section
        className="quality-card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2>
          <span className="highlight-orange">UNIQUE</span>{" "}
          <span className="highlight-navy">PROFILE</span>
        </h2>
        <p>
          <b className="highlight-orange">CBA</b>{" "}
          <b className="highlight-navy">Energy</b> provides customers with a unique solution for every specific project.
        </p>
        <ul className="about-list" variants={listContainer}>
          {uniqueItems.map((text, i) => (
            <li key={i} variants={listItem}>
              {text}
            </li>
          ))}
        </ul>
      </section>

      {/* KEY DIFFERENTIATORS */}
      <section
        className="quality-card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2>
          <span className="highlight-orange">KEY</span>{" "}
          <span className="highlight-navy">DIFFERENTIATORS</span>
        </h2>
        <p>
          <b className="highlight-orange">CBA</b>{" "}
          <b className="highlight-navy">Energy</b> listens closely to understand your needs, then taps our global
          network and industry expertise to deliver precisely the value you seek.
        </p>
        <div className="differentiator-grid">
          <div className="subsection">
            <h5 className="subheading">Our People</h5>
            <p>
              <i>"We cultivate local talent and equip them with global insights."</i>
            </p>
          </div>
          <div className="subsection">
            <h5 className="subheading">Our Knowledge</h5>
            <p>
              <i>
                "Our specialists and knowledge-management platform keep you up to date with the latest market
                intelligence."
              </i>
            </p>
          </div>
        </div>
      </section>

      {/* OUR STRATEGY */}
      <section
        className="quality-card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        style={{ paddingBottom: "6rem" }}
      >
        <h2>
          <span className="highlight-orange">OUR</span>{" "}
          <span className="highlight-navy">STRATEGY</span>
        </h2>
        <ul className="about-list" variants={listContainer}>
          {strategyItems.map((text, i) => (
            <li key={i} variants={listItem}>
              {text}
            </li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="product-footer">
        <div className="product-footer__inner">
          <p style={{color: "#ff8d02"}}>© 2025 CBA Energy | Website by Infimech</p>
        </div>
        <button
        className="back-to-top-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
      </footer>

      
    </main>
  );
}
