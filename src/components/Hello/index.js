import React from "react";
import Typical from "react-typical";
import "./styles.css";

const Hello = () => {
  return (
    <Typical
      steps={["//Bienvenido a mi portafolio!", 4000]}
      loop={1}
      wrapper="p"
      className="hello"
    />
  );
};

export default Hello;
