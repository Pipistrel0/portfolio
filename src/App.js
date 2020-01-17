import React from "react";
import Particles from "react-particles-js";
import Profile from "./components/Profile";
import Button from "./components/Button";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
} from "react-router-dom";
import "./App.css";
import { particlesConfig } from "./constants/particlesConfig";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <div className="containerProfile">
        <Profile />
      </div>
      <div className="containerButton">
        <Button />
      </div>
      <div className="containerContact">
        <Contact />
      </div>
      <div className="containerNavigation">
        <Navigation />
      </div>
      <div className="containerParticles">
        <Particles params={particlesConfig} className="particles" />
      </div>
      <div className="containerButton">
        <Button />
      </div>
      <div className="containerContact">
        <Contact />
      </div>
      <Particles params={particlesConfig} className="particles" />
    </div>
  );
}

export default App;
