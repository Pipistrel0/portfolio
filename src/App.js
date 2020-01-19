import React from "react";
import Particles from "react-particles-js";
import Profile from "./components/Profile";
import Button from "./components/Button";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { particlesConfig } from "./constants/particlesConfig";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <div className="container-profile">
              <Profile />
            </div>
            <div className="container-button">
              <Button />
            </div>
            <div className="container-contact">
              <Contact />
            </div>
            <div className="container-navigation">
              <Navigation />
            </div>
            <div className="container-particles">
              <Particles params={particlesConfig} className="particles" />
            </div>
            <div className="container-button">
              <Button />
            </div>
            <div className="container-contact">
              <Contact />
            </div>
            <Particles params={particlesConfig} className="particles" />
          </div>
          <div className="containerFooter">
            <Footer />
          </div>
        </Route>
        <Route exact path="/portafolio">
          <div className="App">
            <div className="containerPortfolio">
              <Portfolio />
            </div>
            <div className="container-contact">
              <Contact />
            </div>
            <div className="container-navigation">
              <Navigation />
            </div>
            <div className="container-particles">
              <Particles params={particlesConfig} className="particles" />
            </div>
            <div className="containerFooter">
              <Footer />
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
