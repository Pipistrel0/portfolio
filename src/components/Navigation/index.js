import React from "react";
import "./styles.css";

const Navigation = () => {
  return (
    <div className="container">
      <input
        type="checkbox"
        id="navigation-toggle"
        className="navigation-checkbox"
      ></input>
      <label htmlFor="navigation-toggle" className="navigation-button">
        <div className="navigation-line"></div>
        <div className="navigation-line"></div>
        <div className="navigation-line"></div>
      </label>
      <nav className="navigation-nav">
        <ul className="navigation-list">
          <li className="navigation-item">
            <a
              href="https://pipistrel0.github.io/portfolio/"
              className="navigation-link"
            >
              <span>Sobre Mi</span>
            </a>
          </li>
          <li className="navigation-item">
            <a
              href="https://pipistrel0.github.io/portfolio//portafolio"
              className="navigation-link"
            >
              <span>Portafolio</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
