import React from "react";
import ThumbnailPortfolio from "./ThumbnailPortfolio";
import "./styles.css";

const Portfolio = () => {
  return (
    <main className="portfolio-main">
      <h2 className="header">Portafolio</h2>
      <div className="thumbnail-portfolio-grid">
        <ThumbnailPortfolio />
      </div>
    </main>
  );
};

export default Portfolio;
