import React, { Component } from "react";
import StoreItem from "./StoreItem";

export default class StoreList extends Component {
  render() {
    return (
      <div id="storelist">
        <h1>Store List</h1>
        {this.props.locations.length > 0 ? (
          this.props.locations.map((location) => {
            return (
              <StoreItem
                name={location.preferredName}
                key={location.siteName}
              />
            );
          })
        ) : (
          <h5>Loading...</h5>
        )}
      </div>
    );
  }
}
