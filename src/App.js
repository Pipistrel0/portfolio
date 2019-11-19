import React from "react";
import Particles from "react-particles-js";
import Profile from "./components/Profile/index";
import "./App.css";
import { particlesConfig } from "./constants/particlesConfig";

function App() {
  return (
    <div className="container">
      <div className="app">
        <div className="cotainer">
          <Profile />
        </div>
        <Particles params={particlesConfig} className="particles" />
      </div>
    </div>
  );
}

export default App;
