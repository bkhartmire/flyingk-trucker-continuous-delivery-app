import React, { Component } from "react";

export default class FilterByLocations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
    };
  }

  updateCities(value) {
    this.setState({ value });
  }

  render() {
    return (
      <div>
        <span>Locations: </span>

        <select onChange={(event) => this.updateCities(event.target.value)}>
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
            this.props.filterCity(e);
          }}
        >
          <option value="">--City--</option>
          {this.state.value &&
            [...this.props.states[this.state.value]].map((city, index) => {
              return (
                <option key={index + "a"} value={city}>
                  {city}
                </option>
              );
            })}
        </select>
        <select onChange={() => {}}>
          <option value="">--Highway--</option>
        </select>
      </div>
    );
  }
}
