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
    </div>
  );
};

export default Navigation;
