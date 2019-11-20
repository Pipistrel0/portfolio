import React from "react";
import Particles from "react-particles-js";
import Profile from "./components/Profile";
import Button from "./components/Button";
import Contact from "./components/Contact";
import "./App.css";
import { particlesConfig } from "./constants/particlesConfig";

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
