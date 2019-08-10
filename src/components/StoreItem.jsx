import React, { Component } from "react";
import "./StoreItem.css";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

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
        <p>
          <span>Cash:</span>
          {type.cash_price}
        </p>
        {type.credit_price !== -1 && (
          <p>
            <span>Credit:</span>
            {type.credit_price}
          </p>
        )}
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
          <span className="store-title">
            {l.preferredName} - {l.siteName}
          </span>
          {this.gasItem(l.gasTypes[0])}
          {this.gasItem(l.gasTypes[3])}
          <button onClick={() => this.handleClick()}>Show More</button>
          <SlideDown closed={this.state.closed}>
            {l.gasTypes.map((type, index) => {
              return this.gasItem(type, index);
            })}
            <div className="in-slider-container">
              {l.restaurants.length > 0 &&
                l.restaurants.map((r) => {
                  return <p>{r.name}</p>;
                })}
            </div>
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
