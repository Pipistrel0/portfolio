import React from "react";
import Typical from "react-typical";
import utn from "./../../images/1.jpg";
import weather from "./../../images/2.jpg";
import portfolio from "./../../images/3.jpg";
import utnl from "./../../images/utn.png";
import cloudl from "./../../images/cloud.png";
import portfoliol from "./../../images/portfolio.png";
import { IconContext } from "react-icons";
import { FaEye, FaCode } from "react-icons/fa";
import { Button, Modal } from "react-bootstrap";
import "./styles.css";

class Sportfolio extends React.Component {
  constructor() {
    super();
    this.state = { show: false, project: null };
  }
  handleModal() {
    this.setState({ show: !this.state.show });
  }

  handleModalC() {
    this.setState({ show: !this.state.show });
    this.setState({
      project: document.getElementById("imgC").getAttribute("src")
    });
    console.log(this.state.show);
  }
  handleModalU() {
    this.setState({ show: !this.state.show });
    this.setState({
      project: document.getElementById("imgU").getAttribute("src")
    });
  }
  handleModalP() {
    this.setState({ show: !this.state.show });
    this.setState({
      project: document.getElementById("imgP").getAttribute("src")
    });
  }

  render() {
    return (
      <section>
        <h2 className="secondary-header">Portafolio</h2>
        <Typical
          steps={[
            "//Estos son mis proyectos favoritos en los que trabajé. ¡Echa un vistazo y asegúrate de contactarme!",
            100
          ]}
          loop={1}
          wrapper="p"
          className="secondary-sub"
        />
        <div className="gallery">
          <figure>
            <img src={utn} alt="asd"></img>
            <figcaption>
              <h3>Gestor de Pasantias Web con Laravel</h3>
              <div className="additional">
                <img id="imgU" src={utnl} alt="utn logo"></img>
                <Button
                  onClick={() => {
                    this.handleModalU();
                  }}
                  className="open-modal"
                >
                  <IconContext.Provider
                    value={{ color: "#000", size: "1.3em" }}
                  >
                    <FaEye />
                  </IconContext.Provider>
                  ver proyecto>
                </Button>
                <Modal show={this.state.show}>
                  <Modal.Body>
                    {this.state.project === utnl ? (
                      <div className="modal">
                        <div className="project-modal">
                          <div className="project-right">
                            <div className="project-label">PROYECTO</div>
                            <h3 className="project-name">
                              GESTOR DE PASANTIAS
                            </h3>
                            <ul className="project-technologies">
                              <li className="project-technology">
                                HTML &amp; CSS
                              </li>
                              <li className="project-technology">JAVASCRIPT</li>
                              <li className="project-technology">BOOTSTRAP</li>
                              <li className="project-technology">PHP</li>
                              <li className="project-technology">LARAVEL</li>
                              <li className="project-technology">SQL</li>
                            </ul>
                            <div className="project-label">
                              ACERCA DEL PROYECTO
                            </div>
                            <p className="project-summary">
                              Tuve la experiencia de ser pasante en la Facultad
                              Regional de Haedo. Se me otorgó la tarea de
                              desarrollar una página web que gestione las
                              pasantías de dicha facultad, en el cual se
                              encontraban 3 tipos de perfiles, administrativos,
                              empresas y los pasantes o alumnos de la Facultad.
                              Durante el proyecto lidere a 2 de mis compañeros y
                              fui el encargado en el back-end. También me
                              involucre en el desarrollo del front-end y en la
                              documentación. <br></br> <br></br>Para este
                              proyecto tuve la oportunidad de aprender el
                              framework Laravel de PHP, a gestionar y crear base
                              de datos SQL y a gestionar servios de hosting.
                            </p>
                            <div className="buttons">
                              <div className="button-demo">
                                <a
                                  href="https://www.pipistrel0.com"
                                  target="_blank"
                                  className="project-button project-button--modal project-button-hover"
                                  rel="noopener noreferrer"
                                >
                                  <div className="button-svg">
                                    <FaEye size="1em" />
                                  </div>
                                  DEMO
                                </a>
                              </div>
                              <div className="button-code">
                                <div className="project-button project-button--modal private-btn">
                                  <div className="button-svg">
                                    <FaCode size="1em" />
                                  </div>
                                  PRIVADO
                                </div>
                                <Button
                                  className="close-modal"
                                  onClick={() => {
                                    this.handleModalC();
                                  }}
                                >
                                  <div className="button-svg">
                                    <FaEye size="1em" />
                                  </div>
                                  Ver mas proyectos>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {this.state.project === cloudl ? (
                      <div className="modal">
                        <div className="project-modal">
                          <div className="project-right">
                            <div className="project-label">PROYECTO</div>
                            <h3 className="project-name">WEATHER-APP</h3>
                            <ul className="project-technologies">
                              <li className="project-technology">
                                HTML &amp; CSS
                              </li>
                              <li className="project-technology">JAVASCRIPT</li>
                              <li className="project-technology">REACT.JS</li>
                              <li className="project-technology">
                                RESPONSIVE DESING
                              </li>
                              <li className="project-technology">API REST</li>
                              <li className="project-technology">REDUX</li>
                            </ul>
                            <div className="project-label">
                              ACERCA DEL PROYECTO
                            </div>
                            <p className="project-summary">
                              Esta es una Single Page Aplication que utilizando
                              una API otorgada Open Weather Map es capaz de
                              pronosticar el clima de la ubicación seleccionada
                              y dar un pronóstico de la semana. <br></br>{" "}
                              <br></br>
                              Utilizo este proyecto para profundizar mis
                              conocimientos con React y Redux, aprender nuevas
                              técnicas, utilizar librerías de React como
                              react-moment, prop-types, react-icons, etc.{" "}
                              <br></br> <br></br>
                              Actualmente me encuentro desarrollando esta página
                              en la cual implementó nuevas cosas y sigue
                              profundizando mis conocimientos.
                            </p>
                            <div className="buttons">
                              <div className="button-demo">
                                <a
                                  href="https://pipistrel0.github.io/weather-app/"
                                  target="_blank"
                                  className="project-button project-button-hover project-button--modal"
                                  rel="noopener noreferrer"
                                >
                                  <div className="button-svg">
                                    <FaEye size="1em" />
                                  </div>
                                  DEMO
                                </a>
                              </div>
                              <div className="button-code">
                                <a
                                  href="https://github.com/Pipistrel0/weather-app"
                                  target="_blank"
                                  className="project-button project-button-hover project-button--modal"
                                  rel="noopener noreferrer"
                                >
                                  <div className="button-svg">
                                    <FaCode />
                                  </div>
                                  CODIGO
                                </a>
                                <Button
                                  className="close-modal"
                                  onClick={() => {
                                    this.handleModal();
                                  }}
                                >
                                  <div className="button-svg">
                                    <FaEye size="1em" />
                                  </div>
                                  Ver mas proyectos>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {this.state.project === portfoliol ? (
                      <div className="modal">
                        <div className="project-modal">
                          <div className="project-right">
                            <div className="project-label">PROYECTO</div>
                            <h3 className="project-name">PORTAFOLIO</h3>
                            <ul className="project-technologies">
                              <li className="project-technology">
                                HTML &amp; CSS
                              </li>
                              <li className="project-technology">JAVASCRIPT</li>
                              <li className="project-technology">REACT.JS</li>
                              <li className="project-technology">
                                RESPONSIVE DESING
                              </li>
                              <li className="project-technology">UX/UI</li>
                            </ul>
                            <div className="project-label">
                              ACERCA DEL PROYECTO
                            </div>
                            <p className="project-summary">
                              La idea detrás de este proyecto es poder mostrar
                              todos mi grandes proyectos en los que trabajé.
                              Traté de mostrar la mayor cantidad de mis
                              conocimientos a lo largo de todo el portafolio.
                              <br></br> <br></br>
                              Esta página está construida con React y librerías
                              cómo react-particles, react-typical, reat-icos,
                              react-tilt y muchas otras.
                            </p>
                            <div className="buttons">
                              <div className="button-demo">
                                <a
                                  href="https://pipistrel0.github.io/portfolio/"
                                  target="_blank"
                                  className="project-button project-button-hover project-button--modal"
                                  rel="noopener noreferrer"
                                >
                                  <div className="button-svg">
                                    <FaEye size="1em" />
                                  </div>
                                  DEMO
                                </a>
                              </div>
                              <div className="button-code">
                                <a
                                  href="https://github.com/Pipistrel0/portfolio"
                                  target="_blank"
                                  className="project-button project-button--modal project-button-hover"
                                  rel="noopener noreferrer"
                                >
                                  <div className="button-svg">
                                    <FaCode />
                                  </div>
                                  CODIGO
                                </a>
                                <Button
                                  className="close-modal"
                                  onClick={() => {
                                    this.handleModalC();
                                  }}
                                >
                                  <div className="button-svg">
                                    <FaEye size="1em" />
                                  </div>
                                  Ver mas proyectos>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </Modal.Body>
                </Modal>
              </div>
            </figcaption>
          </figure>
          <figure>
            <img src={weather} alt="asd"></img>
            <figcaption>
              <h3>Pronostico del Clima con React</h3>
              <div className="additional">
                <img id="imgC" src={cloudl} alt="cloud logo"></img>
                <Button
                  onClick={() => {
                    this.handleModalC();
                  }}
                  className="open-modal"
                >
                  <IconContext.Provider
                    value={{ color: "#000", size: "1.3em" }}
                  >
                    <FaEye />
                  </IconContext.Provider>
                  ver proyecto>
                </Button>
              </div>
            </figcaption>
          </figure>
          <figure>
            <img src={portfolio} alt="asd"></img>
            <figcaption>
              <h3>Portafolio Personal con React</h3>
              <div className="additional">
                <img id="imgP" src={portfoliol} alt="portfolio logo"></img>
                <Button
                  onClick={() => {
                    this.handleModalP();
                  }}
                  className="open-modal"
                >
                  <IconContext.Provider
                    value={{ color: "#000", size: "1.3em" }}
                  >
                    <FaEye />
                  </IconContext.Provider>
                  ver proyecto>
                </Button>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    );
  }
}

export default Sportfolio;
