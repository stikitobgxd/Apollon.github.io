import "./App.css";

import { Brand, Navbar } from "./components"
import { Info, Whatcrawenos } from "./containers"

import React from "react"

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Info/>
    </div>
      <Brand/>
      <Whatcrawenos/>
  </div>
);

export default App;