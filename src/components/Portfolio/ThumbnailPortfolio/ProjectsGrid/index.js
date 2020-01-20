import React from "react";
import "./styles.css";
import utn from "../../../../images/1.jpg";
import weather from "../../../../images/2.jpg";
import portfolio from "../../../../images/3.jpg";

const ProjectsGrid = ({ handleClick }) => {
  return (
    <div className="projects-grid">
      <div className="project-box">
        <img
          src={utn}
          alt="img"
          className="project"
          onClick={handleClick}
          prop={utn}
        ></img>
      </div>
      <div className="project-box">
        <img
          src={weather}
          alt="img"
          className="project"
          onClick={handleClick}
        ></img>
      </div>
      <div className="project-box">
        <img
          src={portfolio}
          alt="img"
          className="project"
          onClick={handleClick}
        ></img>
      </div>
    </div>
  );
};

export default ProjectsGrid;
