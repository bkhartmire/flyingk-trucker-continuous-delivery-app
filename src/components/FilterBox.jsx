import React, { Component } from "react";
import FilterByLocations from "../containers/FilterByLocations";
import FilterByTypes from "../containers/FilterByTypes";

export default class FilterBox extends Component {
  render() {
    return (
      <div>
        {this.props.loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <h3>Filter by criteria:</h3>
            <FilterByLocations />
            <FilterByTypes />
          </div>
        )}
      </div>
    );
  }
}
