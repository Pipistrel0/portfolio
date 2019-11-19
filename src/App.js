import React from "react";
import Particles from "react-particles-js";
import Profile from "./components/Profile";
import Button from "./components/Button";
import "./App.css";
import { particlesConfig } from "./constants/particlesConfig";

function App() {
  return (
    <div className="container">
      <div className="app">
        <div className="containerProfile">
          <Profile />
        </div>
        <div className="containerButton">
          <Button />
        </div>
        <Particles params={particlesConfig} className="particles" />
      </div>
    </div>
  );
}

export default App;
