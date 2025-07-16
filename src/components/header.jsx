// src/components/Header.jsx
import React from "react";
import "./header.css";
import { motion } from "framer-motion";

// Animasi framer-motion untuk container dan teks

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" }
  }
};

const textcontainerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeInOut" }
  }
};

export default function Header({ data }) {
  if (!data) return null;

  return (
    <header id="header">
      <div className="intro">
        {/* Overlay dimasukkan sebagai child agar tetap dalam konteks parent */}
        <div className="overlay"></div>

        {/* Kontainer teks dengan animasi framer-motion */}
        <motion.div
          className="intro-text-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textcontainerVariants}
        >
          <motion.h2 className="intro-com" variants={textVariants}>
            <img src="img/CBA_logo_fonted.png" alt="CBA Logo" style={{ maxWidth: "35%", marginBottom: "2rem" }} />
          </motion.h2>
          <motion.h1 className="intro-title" variants={textVariants}>
            {data.title}
          </motion.h1>
          <motion.p className="intro-paragraph" variants={textVariants}>
            {data.paragraph}
          </motion.p>
        </motion.div>
      </div>
    </header>
  );
}
