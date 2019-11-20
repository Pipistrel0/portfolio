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
      <label for="navigation-toggle" class="navigation-button">
        <div class="navigation-line"></div>
        <div class="navigation-line"></div>
        <div class="navigation-line"></div>
      </label>
    </div>
  );
};

export default Navigation;
