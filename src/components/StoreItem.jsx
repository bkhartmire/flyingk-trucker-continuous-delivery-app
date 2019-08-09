import React, { Component } from "react";
import "./StoreItem.css";

export default class StoreItem extends Component {
  render() {
    return (
      <div className="storeitem">
        <div className="storebox">
          <h3>{this.props.name}</h3>
        </div>
      </div>
    );
  }
}
