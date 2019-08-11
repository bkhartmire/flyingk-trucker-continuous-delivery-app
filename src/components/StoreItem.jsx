import React, { Component } from "react";
import "./StoreItem.css";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import { restaurantImages } from "../images.js";

export default class StoreItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closed: true,
    };
  }

  handleClick() {
    this.setState({ closed: !this.state.closed });
  }

  gasItem(type, index) {
    return type ? (
      <div key={index} className="gas-container">
        <p>{type.name}</p>
        <p>${type.cash_price.toFixed(2)}</p>
      </div>
    ) : (
      <div />
    );
  }

  render() {
    const l = this.props.location;
    return (
      <div className="storeitem">
        <div className="storebox">
          {l.restaurants.length > 0 &&
            l.restaurants
              .filter((r) => !r.name.includes("FlyingK"))
              .map((r) => {
                return <img src={restaurantImages[r.name]} alt={r.name} />;
              })}
          <span className="store-title">
            {l.preferredName} - {l.siteName}
          </span>
          {this.gasItem(l.gasTypes[0])}
          {this.gasItem(l.gasTypes[3])}
          <button className="show-more" onClick={() => this.handleClick()}>
            Show More
          </button>
          <SlideDown closed={this.state.closed}>
            {l.gasTypes.map((type, index) => {
              return this.gasItem(type, index);
            })}
            <div className="in-slider-container">
              {l.amenities.length > 0 &&
                l.amenities.map((a) => {
                  return <p>{a.name}</p>;
                })}
            </div>
          </SlideDown>
        </div>
      </div>
    );
  }
}
