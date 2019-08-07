import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";
import Map from "./containers/Map";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "100%" }}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Map id="map" />
      </div>
    );
  }
}

export default App;
