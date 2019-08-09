/* eslint-disable jsx-a11y/no-onchange */
import React, { Component } from "react";

export default class FilterByLocations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
    };
  }

  updateCities(e) {
    this.setState({ value: e.target.value });
    this.props.filterState(e);
  }

  render() {
    return (
      <div>
        <span>Locations: </span>

        <select onChange={(event) => this.updateCities(event)}>
          <option value="">--State--</option>
          {Object.keys(this.props.states).map((state, index) => {
            return (
              <option key={index} value={state}>
                {state}
              </option>
            );
          })}
        </select>

        <select
          onChange={(e) => {
            this.props.filterCity(e.target.value, this.state.value);
          }}
        >
          {this.state.value ? (
            [...this.props.states[this.state.value]].map((city, index) => {
              return (
                <option key={index + "a"} value={city}>
                  {city}
                </option>
              );
            })
          ) : (
            <option value="">--City--</option>
          )}
        </select>
        <select onChange={() => {}}>
          <option value="">--Highway--</option>
        </select>
      </div>
    );
  }
}
