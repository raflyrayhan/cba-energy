import { Image } from "./image";
import { motion } from "framer-motion";
import React from "react";

const containerVariants = {
 hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};
export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <motion.div className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
          <h2 style={{color: "#ffca49"}}>Our Partners</h2>
          <p>
            Our business hinges on great relationships with our partners, including some of the most successful names in the steelmaking/trading, OEM products and niche supporting services.
          </p>
        </motion.div>
        <div className="row">
          <motion.div className="portfolio-items" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
