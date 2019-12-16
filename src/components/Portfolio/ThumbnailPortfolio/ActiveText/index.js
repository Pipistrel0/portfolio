import React from "react";
import { FaEye, FaCode } from "react-icons/fa";
import "./styles.css";
import utn from "./../../../../images/1.jpg";
import weather from "./../../../../images/2.jpg";
import portfolio from "./../../../../images/3.jpg";

const ActiveText = ({ activeText }) => {
  const laravel = (
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
              <FaEye size="1em" />
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
  );
  const weatherApp = (
    <div className="project-right">
      <div className="project-label">PROYECTO</div>
      <h3 className="project-name">WEATHER-APP</h3>
      <ul className="project-technologies">
        <li className="project-technology">HTML &amp; CSS</li>
        <li className="project-technology">JAVASCRIPT</li>
        <li className="project-technology">REACT.JS</li>
        <li className="project-technology">RESPONSIVE DESING</li>
        <li className="project-technology">API REST</li>
        <li className="project-technology">REDUX</li>
      </ul>
      <div className="project-label">ACERCA DEL PROYECTO</div>
      <p className="project-summary">Forecast Weather con react</p>
      <div className="buttons">
        <div className="button-demo">
          <a
            href="https://www.pipistrel0.com"
            target="_blank"
            className="project-button project-button--modal"
            rel="noopener noreferrer"
          >
            <div className="button-svg">
              <FaEye size="1em" />
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
  );

  const portfolioReact = (
    <div className="project-right">
      <div className="project-label">PROYECTO</div>
      <h3 className="project-name">PORTAFOLIO</h3>
      <ul className="project-technologies">
        <li className="project-technology">HTML &amp; CSS</li>
        <li className="project-technology">JAVASCRIPT</li>
        <li className="project-technology">REACT.JS</li>
        <li className="project-technology">RESPONSIVE DESING</li>
        <li className="project-technology">UX/UI</li>
      </ul>
      <div className="project-label">ACERCA DEL PROYECTO</div>
      <p className="project-summary">Portafolio con react</p>
      <div className="buttons">
        <div className="button-demo">
          <a
            href="https://www.pipistrel0.com"
            target="_blank"
            className="project-button project-button--modal"
            rel="noopener noreferrer"
          >
            <div className="button-svg">
              <FaEye size="1em" />
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
  );
  return (
    <div className="container-text">
      {activeText === utn ? laravel : null}
      {activeText === weather ? weatherApp : null}
      {activeText === portfolio ? portfolioReact : null}
    </div>
  );
};

export default ActiveText;
