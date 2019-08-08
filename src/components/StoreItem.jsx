import React, { Component } from "react";

export default class StoreItem extends Component {
  render() {
    return (
      <div className="storeitem">
        <h4>{this.props.name}</h4>
      </div>
    );
  }
}
