import React from "react";
import ThumbnailPortfolio from "./ThumbnailPortfolio";
import "./styles.css";

const Portfolio = () => {
  return (
    <main className="container">
      <h2 className="header">
        Portafolio
        <sub className="sub">estos son los portafolios en los que trabaje</sub>
      </h2>
      <div className="thumbnail-portfolio-grid">
        <ThumbnailPortfolio />
      </div>
    </main>
  );
};

export default Portfolio;
