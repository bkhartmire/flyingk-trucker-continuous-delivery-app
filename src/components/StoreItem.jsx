import React, { Component } from "react";
import "./StoreItem.css";

export default class StoreItem extends Component {
  render() {
    return (
      <div className="storeitem">
        <div className="storebox">
          <div className="sitename">
            <span>{this.props.location.preferredName} - </span>
            <span>{this.props.location.site_name}</span>
          </div>
        </div>
      </div>
    );
  }
}
