import React from "react";
// import Project from "./Project";
import "./styles.css";
import utn from "../../../../images/1.jpg";
import weather from "../../../../images/2.jpg";
import portfolio from "../../../../images/3.jpg";

const ProjectsGrid = ({ handleClick }) => {
  return (
    <div className="projects-grid">
      <img
        src={utn}
        alt="img"
        className="project"
        onClick={handleClick}
        prop={utn}
      ></img>
      <img
        src={weather}
        alt="img"
        className="project"
        onClick={handleClick}
      ></img>
      <img
        src={portfolio}
        alt="img"
        className="project"
        onClick={handleClick}
      ></img>
    </div>
  );
};

export default ProjectsGrid;
