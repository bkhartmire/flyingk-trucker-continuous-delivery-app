import React, { Component } from "react";
import FilterByLocations from "../containers/FilterByLocations";
import FilterByTypes from "../containers/FilterByTypes";
import "./FilterBox.css";

export default class FilterBox extends Component {
  render() {
    return (
      <div id="filterbox-container">
        {this.props.loading ? (
          <h1>Loading...</h1>
        ) : (
          <span id="filterbox">
            <h3>Filter by criteria:</h3>
            <div id="options">
              <FilterByLocations />
              <FilterByTypes />
            </div>
          </span>
        )}
      </div>
    );
  }
}
