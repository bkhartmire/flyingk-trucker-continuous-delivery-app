import React, { Component } from "react";

import "./App.css";
import Map from "./containers/Map";
import StoreList from "./containers/StoreList";
import { FilterBox } from "./components/FilterBox";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "80%" }}>
        <div className="AppTitle">
          <h2>FlyingK Truck Stops</h2>
        </div>
        <Map id="map" />
        <div id="search">
          <FilterBox />
          <StoreList />
        </div>
      </div>
    );
  }
}

export default App;
