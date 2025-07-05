import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Projects</h2>
          <p>
            With years of hands-on experience, we deliver reliable engineering solutions and smart digital systems tailored to your project needs.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
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
          </div>
        </div>
        <a href="https://www.canva.com/design/DAGULb9JgvM/fONf8Ot4WBtxVGN1lvWTMQ/view?utm_content=DAGULb9JgvM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb8bb96ff92#1">
        <div className=" btn btn-custom btn-lg page-scroll" style={{marginTop: '30px'}}>
          See More!
        </div>
        </a>
      </div>
    </div>
  );
};
