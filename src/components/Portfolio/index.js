import React from "react";
import "./styles.css";

const Portfolio = () => {
  return (
    <main className="container">
      <h2 className="header">
        Portafolio
        <sub className="sub">//asd</sub>
        <div className="portfolio">
          <div className="row">
            <div className="col-1-of-2 project"></div>
            <div className="col-1-of-2 project"></div>
          </div>
        </div>
      </h2>
    </main>
  );
};

export default Portfolio;
