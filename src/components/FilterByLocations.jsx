/* eslint-disable jsx-a11y/no-onchange */
import React, { Component } from "react";

export default class FilterByLocations extends Component {
  render() {
    return (
      <div>
        <span>Locations: </span>
        <select
          onChange={(e) => {
            this.props.filterState(e);
          }}
        >
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
        </select>
        <select onChange={() => {}}>
          <option value="">--Highway--</option>
        </select>
      </div>
    );
  }
}
