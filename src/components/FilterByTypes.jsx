import React, { Component } from "react";

export default class FilterByTypes extends Component {
  render() {
    return (
      <div>
        <span>Types:</span>
        <label htmlFor="travel_stop">Travel Stop</label>
        <input
          type="checkbox"
          name="travel_stop"
          onClick={() => this.props.selectType("travel stop")}
        />
        <label htmlFor="country_store">Country Store</label>
        <input
          type="checkbox"
          name="country_store"
          onClick={() => this.props.selectType("country store")}
        />
      </div>
    );
  }
}
