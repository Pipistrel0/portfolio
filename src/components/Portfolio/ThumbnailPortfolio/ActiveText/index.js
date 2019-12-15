import React from "react";
import "./styles.css";
import utn from "./../../../../images/1.jpg";
import weather from "./../../../../images/2.jpg";
import portfolio from "./../../../../images/3.jpg";

const ActiveText = ({ activeText }) => {
  const laravel = (
    <div class="project__right">
      <div class="project__label">Proyecto</div>
      <h3 class="project__name">Gestor de pasantias</h3>
      <ul class="project__technologies">
        <li class="project__technology">HTML &amp; CSS</li>
        <li class="project__technology">JavaScript</li>
        <li class="project__technology">Bootstrap</li>
        <li class="project__technology">PHP</li>
        <li class="project__technology">Laravel</li>
        <li class="project__technology">MySQL</li>
      </ul>
      <div class="project__label">Acerca del proyecto</div>
      <p class="project__summary">Gestor de pasantiasn en la utn</p>
      <a
        href="https://www.pipistrel0.com"
        target="_blank"
        class="project__button project__button--modal"
        rel="noopener noreferrer"
      >
        Demo
      </a>
      <a
        href="https://github.com/Pipistrel0"
        target="_blank"
        class="project__button project__button--modal"
        rel="noopener noreferrer"
      >
        Codigo
      </a>
    </div>
  );
  const weatherApp = (
    <div class="project__right">
      <div class="project__label">Proyecto</div>
      <h3 class="project__name">Weather-app</h3>
      <ul class="project__technologies">
        <li class="project__technology">HTML &amp; CSS &amp; JSX</li>
        <li class="project__technology">JavaScript</li>
        <li class="project__technology">React.js</li>
        <li class="project__technology">API REST</li>
        <li class="project__technology">Redux</li>
      </ul>
      <div class="project__label">Acerca del proyecto</div>
      <p class="project__summary">Forecast Weather con react</p>
      <a
        href="https://www.pipistrel0.com"
        target="_blank"
        class="project__button project__button--modal"
        rel="noopener noreferrer"
      >
        Demo
      </a>
      <a
        href="https://github.com/Pipistrel0"
        target="_blank"
        class="project__button project__button--modal"
        rel="noopener noreferrer"
      >
        Codigo
      </a>
    </div>
  );

  const portfolioReact = (
    <div class="project__right">
      <div class="project__label">Proyecto</div>
      <h3 class="project__name">Portafolio con react</h3>
      <ul class="project__technologies">
        <li class="project__technology">HTML &amp; CSS &amp; JSX</li>
        <li class="project__technology">JavaScript</li>
        <li class="project__technology">React.js</li>
        <li class="project__technology">Responsive</li>
        <li class="project__technology">UX/UI</li>
      </ul>
      <div class="project__label">Acerca del proyecto</div>
      <p class="project__summary">Portafolio con react</p>
      <a
        href="https://www.pipistrel0.com"
        target="_blank"
        class="project__button project__button--modal"
        rel="noopener noreferrer"
      >
        Demo
      </a>
      <a
        href="https://github.com/Pipistrel0"
        target="_blank"
        class="project__button project__button--modal"
        rel="noopener noreferrer"
      >
        Codigo
      </a>
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
