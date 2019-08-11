/* eslint-disable prefer-template */
/* eslint-disable jsx-a11y/no-onchange */
import React, { Component } from "react";

export default class FilterByLocations extends Component {
  render() {
    let cityOptionValue = null;
    if (this.props.resetCityOptions) {
      cityOptionValue = "default";
    }
    let cityOptions;
    if (this.props.selectedFilters.state) {
      cityOptions = [
        ...this.props.states[this.props.selectedFilters.state],
      ].map((city, index) => {
        return (
          <option key={index + "a"} value={city}>
            {city}
          </option>
        );
      });
    }
    if (this.props.selectedFilters.highway) {
      cityOptions = [
        ...this.props.highways[this.props.selectedFilters.highway],
      ].map((city, index) => {
        return (
          <option key={index + "a"} value={city}>
            {city}
          </option>
        );
      });
    }

    return (
      <React.Fragment>
        <span>Locations: </span>

        <select onChange={(e) => this.props.filterState(e.target.value)}>
          <option value="" selected>
            --State--
          </option>
          {!this.props.selectedFilters.highway &&
            Object.keys(this.props.states).map((state, index) => {
              return (
                <option key={index} value={state}>
                  {state}
                </option>
              );
            })}
        </select>

        <select
          value={cityOptionValue}
          onChange={(e) => this.props.filterCity(e.target.value)}
        >
          <option value="default">--City--</option>
          {cityOptions}
        </select>
        <select onChange={(e) => this.props.filterHighway(e.target.value)}>
          <option value="" selected>
            --Highway--
          </option>
          {!this.props.selectedFilters.state &&
            Object.keys(this.props.highways).map((highway, index) => {
              return (
                <option key={index} value={highway}>
                  {highway}
                </option>
              );
            })}
        </select>
      </React.Fragment>
    );
  }
}
