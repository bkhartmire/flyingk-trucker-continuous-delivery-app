import React, { Component } from "react";
import StoreItem from "./StoreItem";
import "./StoreList.css";

export default class StoreList extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.locations.length > 0 && (
          <div id="storelist">
            {this.props.locations.map((location) => {
              return (
                <StoreItem
                  name={location.preferredName}
                  key={location.siteName}
                />
              );
            })}
          </div>
        )}
      </React.Fragment>
    );
  }
}
