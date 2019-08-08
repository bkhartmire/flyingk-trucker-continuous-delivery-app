import React, { Component } from "react";
import StoreItem from "./StoreItem";

export default class StoreList extends Component {
  // componentDidUpdate() {
  //   debugger;
  // }
  render() {
    return (
      <div id="storelist">
        <h1>Store List</h1>
        {this.props.locations.map((location) => {
          return (
            <StoreItem
              name={location.preferred_name}
              key={location.site_name}
            />
          );
        })}
      </div>
    );
  }
}
