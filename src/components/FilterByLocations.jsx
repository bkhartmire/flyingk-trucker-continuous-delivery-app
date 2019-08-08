import React, { Component } from "react";

export default class FilterByLocations extends Component {
  render() {
    return (
      <div>
        <span>Locations: </span>
        <select onChange={() => {}}>
          <option value="">--State--</option>
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
