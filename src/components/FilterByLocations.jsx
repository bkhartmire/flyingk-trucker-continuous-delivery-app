/* eslint-disable jsx-a11y/no-onchange */
import React, { Component } from "react";

export default class FilterByLocations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
      reset: false,
    };
  }

  updateCities(e) {
    this.setState({ value: e.target.value, reset: true });
    this.props.filterState(e);
  }

  selectCity(e) {
    this.setState({ reset: false });
    this.props.filterCity(e.target.value, this.state.value);
  }

  render() {
    let cityOptionValue = null;
    if (this.state.reset) {
      cityOptionValue = "default";
    }
    return (
      <div>
        <span>Locations: </span>

        <select id="city_select" onChange={(e) => this.updateCities(e)}>
          <option value="" selected>
            --State--
          </option>
          {Object.keys(this.props.states).map((state, index) => {
            return (
              <option key={index} value={state}>
                {state}
              </option>
            );
          })}
        </select>

        <select value={cityOptionValue} onChange={(e) => this.selectCity(e)}>
          <option value="default">--City--</option>
          {this.state.value &&
            [...this.props.states[this.state.value]].map((city, index) => {
              return (
                <option key={index + "a"} value={city} selected={false}>
                  {city}
                </option>
              );
            })}
        </select>
        <select
          onChange={(e) => {
            this.props.filterHighway(e.target.value);
          }}
        >
          <option value="" selected>
            --Highway--
          </option>
          {[...this.props.highways].map((state, index) => {
            return (
              <option key={index} value={state}>
                {state}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
