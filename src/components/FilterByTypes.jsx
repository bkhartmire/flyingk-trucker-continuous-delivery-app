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
          onClick={(e) => this.props.filterType(e, "travel stop")}
        />
        <label htmlFor="country_store">Country Store</label>
        <input
          type="checkbox"
          name="country_store"
          onClick={(e) => this.props.filterType(e, "country store")}
        />
      </div>
    );
  }
}
