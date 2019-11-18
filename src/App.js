import React from "react";
import Particles from "react-particles-js";
import "./App.css";
import { particlesConfig } from "./constants/particlesConfig";

function App() {
  return (
    <div className="App">
      <Particles params={particlesConfig} />
    </div>
  );
}

export default App;
