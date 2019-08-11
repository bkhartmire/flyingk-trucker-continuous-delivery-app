import React, { Component } from "react";
import StoreItem from "./StoreItem";
import "./StoreList.css";

export default class StoreList extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.locations.length > 0 ? (
          <div id="storelist">
            {this.props.locations.map((location, index) => {
              return <StoreItem key={index} location={location} />;
            })}
          </div>
        ) : this.props.madeSelection ? (
          <h5 className="message">No results match your selection.</h5>
        ) : (
          <h5 className="message">Please make a selection.</h5>
        )}
      </React.Fragment>
    );
  }
}
