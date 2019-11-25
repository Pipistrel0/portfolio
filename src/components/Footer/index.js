import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-item">
        © 2019 Gianluca Ciccarelli. Todos los derechos reservados.
      </div>
      <div class="footer-item">
        <div class="footer-contact">
          Email:{" "}
          <a href="mailto:gianluca.ciccarelli25@gmail.com" class="footer-link">
            gianluca.ciccarelli25@gmail.com
          </a>
        </div>
        <div class="footer-contact">
          Tel:{" "}
          <a href="tel: +541168688763" class="footer-link">
            +541168688763
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
