import React from "react";
import "./aboutpreview.css";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function AboutPreview({ data }) {
  if (!data) return null;

  return (
    <section id="about-preview">
      <div className="about-image" />
      <motion.div
        className="about-text"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >  
        <h2 className="about-title">Built on Standards.<br />Driven by Results.</h2>
        <p className="about-line">{data.line1}</p>
        <p className="about-line">{data.line2}</p>
        <a href="/about" className="btn-custom">More About Us</a>
      </motion.div>
    </section>
  );
}
