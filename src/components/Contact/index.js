import React from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoPerson, GoMail } from "react-icons/go";
import "./styles.css";

const Contact = () => {
  return (
    <ul className="contact-list">
      <li className="contact-item linkedin">
        <a
          href="https://www.linkedin.com/in/gianluca-ciccarelli-a0a43a196/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link linkedin"
        >
          <span className="text">LINKEDIN</span>
          <div className="svg">
            <IconContext.Provider value={{ color: "#fff", size: "1.75em" }}>
              <FaLinkedin />
            </IconContext.Provider>
          </div>
        </a>
      </li>
      <li className="contact-item github">
        <a
          href="https://github.com/Pipistrel0"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link github "
        >
          <span className="text">GITHUB</span>
          <div className="svg">
            <IconContext.Provider value={{ size: "1.75em" }}>
              <FaGithub />
            </IconContext.Provider>
          </div>
        </a>
      </li>
      <li className="contact-item email">
        <a
          href="mailto:gianluca.ciccarelli25@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link email"
        >
          <span className="text">EMAIL</span>
          <IconContext.Provider value={{ size: "1.75em" }}>
            <GoMail />
          </IconContext.Provider>
        </a>
      </li>
      <li className="contact-item resume">
        <a
          href="https://drive.google.com/open?id=1ID5Mgo0ek2gOdt7-522EV0sR1zn41RAT"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link resume"
        >
          <span className="text">CV</span>
          <IconContext.Provider value={{ size: "1.75em" }}>
            <GoPerson />
          </IconContext.Provider>
        </a>
      </li>
    </ul>
  );
};

export default Contact;
