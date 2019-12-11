import React from "react";
import ActiveThumbnailProject from "./ActiveThumbnailProject";
import ProjectsGrid from "./ProjectsGrid";
import "./styles.css";

class ThumbnailPortfolio extends React.Component {
  render() {
    return (
      <div className="thumbnail-portfolio">
        <div style={{ flex: 1 }}>
          <ActiveThumbnailProject />
          <ProjectsGrid />
        </div>
        <div style={{ flex: 1 }}>Izquierda</div>
      </div>
    );
  }
}

export default ThumbnailPortfolio;
