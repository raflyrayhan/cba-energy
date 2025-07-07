import React from "react";
import { motion } from "framer-motion";
import AboutHeader from "../components/aboutheader"; // Import the new AboutHeader
import "./AboutPage.css";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const listContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};

const listItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export default function AboutPage() {
  return (
    <main id="about-page" style={{ background: "linear-gradient(to bottom, #FF9800, #F57C00)", minHeight: "100vh" }}>
      <AboutHeader />
      
      {/* QUALITY & HSE Section */}
      <motion.div
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        style={{ 
          color: "white", 
          textAlign: "center", 
          marginTop: 30, 
          padding: 20,
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          borderRadius: "5px"
        }}
      >
        QUALITY &amp; HSE
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        style={{ 
          color: "white", 
          maxWidth: 800, 
          margin: "0 auto", 
          padding: "0 20px",
          marginTop: 30
        }}
      >
        <ul style={{ paddingInlineStart: "20px" }}>
          {[ 
            "A courage to make a breakthrough, belongs by people who have a vision for the future. CBA ENERGY continues to grow, explore, and create new things that build the future.",
            "At CBA ENERGY, we believe that maintaining the highest quality standards is what drives our success. We aspire to excellence in health, safety and environment (HSE) performance by creating and maintaining a culture of zero harm.",
            "The objective of our Quality & HSE Policy is not only to satisfy, but also to exceed expectations by constant improvement of our products and services.",
            "Our Quality & HSE Management System is continuously reviewed to keep pace with new technology, standards, regulations and codes of practice.",
            "We are a company certified to ISO 9001:2008, ISO 14001:2009 and OHSAS 18001:2007."
          ].map((text, i) => (
            <motion.li key={i} variants={listItem} style={{ marginBottom: 15, lineHeight: 1.6 }}>
              {text}
            </motion.li>
          ))}
        </ul>
      </motion.div>
      {/* CORE VALUE */}
      <motion.div
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        style={{ color: "white", textAlign: "center", marginTop: 50, padding: 20 }}
      >
        CORE VALUE
      </motion.div>
      <motion.ul
        className="about-list"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={listContainer}
        style={{ color: "white", maxWidth: 800, margin: "0 auto", padding: "0 20px" }}
      >
        {[ 
          "Our vision is to be acknowledged by our customers, our people and our shareholders as the leading strategic partner in our market.",
          "We constantly strive to improve the efficiency of our business by investing in the development of our people and through innovation in technology, operations and processes.",
          "Our mission is to meet the expectations of our customers and shareholders in developing a capable and creative company within our market."
        ].map((text, i) => (
          <motion.li key={i} variants={listItem} style={{ marginBottom: 15, lineHeight: 1.6 }}>
            {text}
          </motion.li>
        ))}
      </motion.ul>

      {/* UNIQUE PROFILE */}
      <motion.div
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        style={{ color: "white", textAlign: "center", marginTop: 50, padding: 20 }}
      >
        UNIQUE PROFILE
      </motion.div>
      <motion.p
        className="about-para"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        style={{ color: "white", maxWidth: 800, margin: "0 auto", padding: "0 20px", marginBottom: 30, lineHeight: 1.6 }}
      >
        The fact is that CBA ENERGY is all of the above. CBA ENERGY provides customers with a unique solution for every specific project.
      </motion.p>
      <motion.ul
        className="about-list"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={listContainer}
        style={{ color: "white", maxWidth: 800, margin: "0 auto", padding: "0 20px" }}
      >
        {[ 
          "Provides customers with specific and/or generic design engineering",
          "Performs specific and/or generic fabricated items",
          "Supplies specialty engineered goods",
          "Delivers a specific scope of work as required by customer requirements"
        ].map((text, i) => (
          <motion.li key={i} variants={listItem} style={{ marginBottom: 15, lineHeight: 1.6 }}>
            {text}
          </motion.li>
        ))}
      </motion.ul>

      {/* KEY DIFFERENTIATORS */}
      <motion.div
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        style={{ color: "white", textAlign: "center", marginTop: 50, padding: 20 }}
      >
        KEY DIFFERENTIATORS
      </motion.div>
      <motion.p
        className="about-para"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        style={{ color: "white", maxWidth: 800, margin: "0 auto", padding: "0 20px", marginBottom: 30, lineHeight: 1.6 }}
      >
        CBA ENERGY takes the time to listen, question and understand customers' needs. We tap those insights into our global network, industry expertise, strong judgement and experience to help our customers create the value and specification they're looking for.
      </motion.p>
      {["Our people", "Our knowledge"].map((sub, i) => (
        <motion.div
          key={i}
          className="subsection"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          style={{ color: "white", maxWidth: 800, margin: "0 auto", padding: "0 20px", marginBottom: 30 }}
        >
          <h5 className="subheading" style={{ color: "white", marginBottom: 15 }}>{sub}</h5>
          <p style={{ lineHeight: 1.6 }}>
            {sub === "Our people"
              ? "We aim to draw out people from the best talent and develop them to be the very best in our sector. We ensure our people are immersed in local knowledge about the markets they serve, while gaining global perspective from our worldwide partners."
              : "Our worldwide network of industry sector specialists are linked by a sophisticated knowledge management system, giving customers the tools to input their insights and draw upon the most up‐to‐date, valuable information."}
          </p>
        </motion.div>
      ))}

      {/* OUR STRATEGY */}
      <motion.div
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        style={{ color: "white", textAlign: "center", marginTop: 50, padding: 20 }}
      >
        OUR STRATEGY
      </motion.div>
      <motion.ul
        className="about-list"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={listContainer}
        style={{ color: "white", maxWidth: 800, margin: "0 auto", padding: "0 20px" }}
      >
        {[ 
          "Early engagement and validation with an account management team who combines technical expertise with affiliate companies within our group.",
          "Partnering with other leading organizations in complementary sectors to provide packaged solutions.",
          "Investing in local infrastructure and integration of our local team."
        ].map((text, i) => (
          <motion.li key={i} variants={listItem} style={{ marginBottom: 15, lineHeight: 1.6 }}>
            {text}
          </motion.li>
        ))}
      </motion.ul>

      {/* Back to Top Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ 
          position: "fixed",
          bottom: 30,
          right: 30,
          backgroundColor: "white",
          color: "#FF9800",
          border: "none",
          borderRadius: "50%",
          width: 50,
          height: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </motion.button>
    </main>
  );
}