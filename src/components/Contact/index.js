import React from "react";
import "./styles.css";

const Contact = () => {
  return (
    <ul className="contactList">
      <li className="contactItem linkedin">
        <a
          href="https://www.linkedin.com/in/gianluca-ciccarelli-a0a43a196/"
          target="_blank"
          rel="noopener noreferrer"
          className="contactLink linkedin"
        >
          <span>linkedin</span>
          <img
            src="https://img.icons8.com/color/48/000000/linkedin.png"
            alt="linkedin"
          ></img>
        </a>
      </li>
      <li className="contactItem github">
        <a
          href="https://github.com/Pipistrel0"
          target="_blank"
          rel="noopener noreferrer"
          className="contactLink github "
        >
          <span>github</span>
        </a>
      </li>
      <li className="contactItem email">
        <a
          href="mailto:gianluca.ciccarelli25@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contactLink email"
        >
          <span>email</span>
        </a>
      </li>
      <li className="contactItem resume">
        <a
          href="https://drive.google.com/file/d/1bt7OCMO7gF36BJgi2X5AzscXx4zuW_7k/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="contactLink resume"
        >
          <span>curriculum</span>
        </a>
      </li>
    </ul>
  );
};

export default Contact;
