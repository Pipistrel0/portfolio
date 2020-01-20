import React from "react";
import { FaEyeSlash, FaCode } from "react-icons/fa";
import "./styles.css";

const UtnProject = () => {
  return (
    <div className="project-modal">
      <div className="project-right">
        <div className="project-label">PROYECTO</div>
        <h3 className="project-name">GESTOR DE PASANTIAS</h3>
        <ul className="project-technologies">
          <li className="project-technology">HTML &amp; CSS</li>
          <li className="project-technology">JAVASCRIPT</li>
          <li className="project-technology">BOOTSTRAP</li>
          <li className="project-technology">PHP</li>
          <li className="project-technology">LARAVEL</li>
          <li className="project-technology">MYSQL</li>
        </ul>
        <div className="project-label">ACERCA DEL PROYECTO</div>
        <p className="project-summary">Gestor de pasantiasn en la utn</p>
        <div className="buttons">
          <div className="button-demo">
            <a
              href="https://www.pipistrel0.com"
              target="_blank"
              className="project-button project-button--modal"
              rel="noopener noreferrer"
            >
              <div className="button-svg">
                <FaEyeSlash size="1em" />
              </div>
              DEMO
            </a>
          </div>
          <div className="button-code">
            <a
              href="https://github.com/Pipistrel0"
              target="_blank"
              className="project-button project-button--modal"
              rel="noopener noreferrer"
            >
              <div className="button-svg">
                <FaCode />
              </div>
              CODIGO
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtnProject;
