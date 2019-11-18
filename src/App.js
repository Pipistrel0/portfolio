import React from "react";
import Particles from "react-particles-js";
import Profile from "./components/Profile/index";
import "./App.css";
import { particlesConfig } from "./constants/particlesConfig";

function App() {
  return (
    <div className="App">
      <Particles params={particlesConfig} className="particles" />
      <Profile />
    </div>
  );
}

export default App;
