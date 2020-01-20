import React from "react";
import utn from "./../../images/1.jpg";
import weather from "./../../images/2.jpg";
import portfolio from "./../../images/3.jpg";
import utnl from "./../../images/utn.png";
import cloudl from "./../../images/cloud.png";
import portfoliol from "./../../images/portfolio.png";
import { IconContext } from "react-icons";
import { FaEye } from "react-icons/fa";
import "./styles.css";

const Sportfolio = () => {
  return (
    <section>
      <h2 className="secondary-header">Portafolio</h2>
      <sub className="secondary-sub">
        {"//"} Estos son mis proyectos favoritos en los que he trabajado. ¡Echa
        un vistazo y asegúrate de contactarme!
      </sub>
      <div className="gallery">
        <figure>
          <img src={utn} alt="asd"></img>
          <figcaption>
            <h3>Gestor de Pasantias Web con Laravel</h3>
            <div className="additional">
              <img src={utnl} alt="utn logo"></img>
              <button className="open-modal">
                <IconContext.Provider value={{ color: "#000", size: "1.3em" }}>
                  <FaEye />
                </IconContext.Provider>
                ver proyecto>
              </button>
            </div>
          </figcaption>
        </figure>
        <figure>
          <img src={weather} alt="asd"></img>
          <figcaption>
            <h3>Pronostico del Clima con React</h3>
            <div className="additional">
              <img src={cloudl} alt="cloud logo"></img>
              <button className="open-modal">
                <IconContext.Provider value={{ color: "#000", size: "1.3em" }}>
                  <FaEye />
                </IconContext.Provider>{" "}
                {"  "}
                ver proyecto>
              </button>
            </div>
          </figcaption>
        </figure>
        <figure>
          <img src={portfolio} alt="asd"></img>
          <figcaption>
            <h3>Portafolio Personal con React</h3>
            <div className="additional">
              <img src={portfoliol} alt="portfolio logo"></img>
              <button className="open-modal">
                <IconContext.Provider value={{ color: "#000", size: "1.3em" }}>
                  <FaEye />
                </IconContext.Provider>
                ver proyecto>
              </button>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Sportfolio;
