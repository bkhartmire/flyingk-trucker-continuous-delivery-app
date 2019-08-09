import React, { Component } from "react";

export default class FilterByLocations extends Component {
  render() {
    return (
      <div>
        <span>Locations: </span>
        <select onChange={() => {}}>
          <option value="">--State--</option>
          {Object.keys(this.props.states).map((state, index) => {
            return (
              <option key={index} value={state}>
                {state}
              </option>
            );
          })}
        </select>
        <select onChange={() => {}}>
          <option value="">--City--</option>
        </select>
        <select onChange={() => {}}>
          <option value="">--Highway--</option>
        </select>
      </div>
    );
  }
}
