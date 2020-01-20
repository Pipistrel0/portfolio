import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer footer-portfolio">
      <div className="footer-item">
        © 2019 Gianluca Ciccarelli. Todos los derechos reservados.
      </div>
      <div className="footer-item">
        <div className="footer-contact">
          Email:{" "}
          <a
            href="mailto:gianluca.ciccarelli25@gmail.com"
            className="footer-link"
          >
            gianluca.ciccarelli25@gmail.com
          </a>
        </div>
        <div className="footer-contact">
          Tel:{" "}
          <a href="tel: +541168688763" className="footer-link">
            +541168688763
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
