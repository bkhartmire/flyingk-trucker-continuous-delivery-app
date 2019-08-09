import React, { Component } from "react";

export default class FilterByLocations extends Component {
  componentDidMount() {
    this.props.setStatesCities();
  }

  render() {
    return (
      <div>
        <span>Locations: </span>
        <select onChange={() => {}}>
          <option value="">--State--</option>
          {Object.keys(this.props.states).map((state) => {
            return <option value={state}>{state}</option>;
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
