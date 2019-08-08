import React, { Component } from "react";

export default class StoreItem extends Component {
  render() {
    return (
      <div className="storeitem">
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}
