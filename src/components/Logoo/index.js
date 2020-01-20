import React from "react";
import Tilt from "react-tilt";
import Pipi from "./p2.png";
import "./styles.css";

const Logoo = () => {
  return (
    <div className="ma4 mt0 logo">
      <Tilt className="Tilt br2 shadow-2 logo-tilt" options={{ max: 55 }}>
        <a href="https://pipistrel0.github.io/portfolio/">
          <img src={Pipi} alt="pipistrelo logo" />
        </a>
      </Tilt>
    </div>
  );
};

export default Logoo;
