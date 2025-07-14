import React from "react";
import { motion } from "framer-motion";
import AboutHeader from "../components/aboutheader";
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
  visible: { transition: { staggerChildren: 0.2 } }
};

const listItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export default function AboutPage() {
  const qualityItems = [
    "A courage to make a breakthrough, belongs by people who have a vision for the future. CBA ENERGY continues to grow, explore, and create new things that build the future.",
    "At CBA ENERGY, we believe that maintaining the highest quality standards is what drives our success. We aspire to excellence in health, safety and environment (HSE) performance by creating and maintaining a culture of zero harm.",
    "The objective of our Quality & HSE Policy is not only to satisfy, but also to exceed expectations by constant improvement of our products and services.",
    "Our Quality & HSE Management System is continuously reviewed to keep pace with new technology, standards, regulations and codes of practice.",
    "We are a company certified to ISO 9001:2008, ISO 14001:2009 and OHSAS 18001:2007."
  ];

  const coreItems = [
    "Our vision is to be acknowledged by our customers, our people and our shareholders as the leading strategic partner in our market.",
    "We constantly strive to improve the efficiency of our business by investing in the development of our people and through innovation in technology, operations and processes.",
    "Our mission is to meet the expectations of our customers and shareholders in developing a capable and creative company within our market."
  ];

  const uniqueItems = [
    "Provides customers with specific and/or generic design engineering",
    "Performs specific and/or generic fabricated items",
    "Supplies specialty engineered goods",
    "Delivers a specific scope of work as required by customer requirements"
  ];

  const strategyItems = [
    "Early engagement and validation with an account management team who combines technical expertise with affiliate companies within our group.",
    "Partnering with other leading organizations in complementary sectors to provide packaged solutions.",
    "Investing in local infrastructure and integration of our local team."
  ];

  return (
    <main id="about-page">
      <AboutHeader />

      <motion.div
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        QUALITY &amp; HSE
      </motion.div>
      <motion.ul
        className="about-list"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={listContainer}
      >
        {qualityItems.map((text, i) => (
          <motion.li key={i} className="about-list-item" variants={listItem}>
            {text}
          </motion.li>
        ))}
        <div>
          <img src="img/iso.png" alt="ISO certificates" style={{maxWidth: "35%"}}/>
        </div>
      </motion.ul>

      {/* CORE VALUE */}
      <motion.div
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        CORE VALUE
      </motion.div>
      <div className="about-parent">
        <motion.ul
          className="about-list about-div1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={listContainer}
        >
          {coreItems.map((text, i) => (
            <motion.li key={i} variants={listItem}>
              {text}
            </motion.li>
          ))}
        </motion.ul>
        <motion.div
          className="about-div2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <img src="img/core_value.png" alt="Core Values Illustration" style={{width:"50%"}}/>
        </motion.div>
      </div>

      <motion.div
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        UNIQUE PROFILE
      </motion.div>
      <motion.p
        className="about-para"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <b>
          The fact is that CBA ENERGY is all of the above. CBA ENERGY provides
          customers with a unique solution for every specific project.
        </b>
      </motion.p>
      <motion.ul
        className="about-list"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={listContainer}
      >
        {uniqueItems.map((text, i) => (
          <motion.li key={i} variants={listItem}>
            {text}
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        KEY DIFFERENTIATORS
      </motion.div>
      <motion.p
        className="about-para"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <b>
        CBA ENERGY takes the time to listen, question and understand customers'
        needs. We tap those insights into our global network, industry
        expertise, strong judgement and experience to help our customers create
        the value and specification they're looking for.
        </b>
      </motion.p>
      {["Our people", "Our knowledge"].map((sub, i) => (
        <motion.div
          key={i}
          className="subsection"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h5 className="subheading">{sub}</h5>
          <p>
            {sub === "Our people"
              ? "We aim to draw out people from the best talent and develop them to be the very best in our sector. We ensure our people are immersed in local knowledge about the markets they serve, while gaining global perspective from our worldwide partners."
              : "Our worldwide network of industry sector specialists are linked by a sophisticated knowledge management system, giving customers the tools to input their insights and draw upon the most up‐to‐date, valuable information."}
          </p>
        </motion.div>
      ))}

      <motion.div
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        OUR STRATEGY
      </motion.div>
      <motion.ul
        className="about-list"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={listContainer}
      >
        {strategyItems.map((text, i) => (
          <motion.li key={i} variants={listItem}>
            {text}
          </motion.li>
        ))}
      </motion.ul>

      <footer className="product-footer">
        <div className="product-footer__inner">
          <p>© 2025 CBA Energy | Website by Infimech</p>
        </div>
      </footer>

      <motion.button
        className="back-to-top-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </motion.button>
    </main>
  );
}
