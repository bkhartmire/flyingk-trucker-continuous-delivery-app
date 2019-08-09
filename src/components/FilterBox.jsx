import React, { Component } from "react";
import FilterByLocations from "./FilterByLocations";
import FilterByTypes from "../containers/FilterByTypes";

export default class FilterBox extends Component {
  render() {
    return (
      <div>
        {this.props.loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <h2>Filter by criteria:</h2>
            <FilterByLocations />
            <FilterByTypes />
          </div>
        )}
      </div>
    );
  }
}
