import React from "react";
import { motion } from "framer-motion";
import "./prodpreview.css";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function ProductPreview() {
  const productData = [
    {
      title: "Integrated Steel",
      image: "img/product-preview.png",
      description:
        "We supply a complete range of steel solutions including rigid linepipes and bends (bare/coated), OCTG (casing, tubing, accessories), structural steel for offshore/onshore use, vessel and tank steel packages (atmospheric/cryogenic), and steel sheet piles for foundation and retention works."
    },
    {
      title: "Integrated Steel",
      image: "img/product-preview.png",
      description:
        "We supply a complete range of steel solutions including rigid linepipes and bends (bare/coated), OCTG (casing, tubing, accessories), structural steel for offshore/onshore use, vessel and tank steel packages (atmospheric/cryogenic), and steel sheet piles for foundation and retention works."
    },
    {
      title: "Integrated Steel",
      image: "img/product-preview.png",
      description:
        "We supply a complete range of steel solutions including rigid linepipes and bends (bare/coated), OCTG (casing, tubing, accessories), structural steel for offshore/onshore use, vessel and tank steel packages (atmospheric/cryogenic), and steel sheet piles for foundation and retention works."
    }
  ];

  return (
    <section id="product-preview">
      <div className="product-bg">
        <div className="product-overlay">
          <div className="product-grid">
            {productData.map((item, index) => (
              <motion.div
                key={index}
                className="product-card"
                initial="hidden"
                whileInView="visible"
                variants={sectionVariants}
                viewport={{ once: true }}
              >
                <div className="product-image">
                  <motion.img
                    src={item.image}
                    alt="Product Preview"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="product-text">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
