import React, { Component } from "react";

import "./App.css";
import Map from "./containers/Map";
import StoreList from "./containers/StoreList";
import FilterBox from "./containers/FilterBox";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "80%" }}>
        <div className="AppTitle">
          <h2>FlyingK Truck Stops</h2>
        </div>
        <Map id="map" />
        <div id="search">
          {this.props.loading ? (
            <h5>Loading results...</h5>
          ) : (
            <React.Fragment>
              <FilterBox />
              <StoreList />
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default App;
