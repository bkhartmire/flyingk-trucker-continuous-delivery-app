import React, { Component } from "react";
import "./StoreItem.css";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import Subway from "../images/subway.png";

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
      <ul key={index}>
        <li>{type.name}</li>
        <li>{type.cash_price}</li>
        {type.credit_price !== -1 && <li>{type.credit_price}</li>}
      </ul>
    ) : (
      <div />
    );
  }

  render() {
    return (
      <div className="storeitem">
        <div className="storebox">
          this.props.location.restaurants[0].name === "Subway" ?{" "}
          <img src={Subway} alt="logo" />
          <span>{this.props.location.preferredName} - </span>
          <span>{this.props.location.siteName}</span>
          {this.gasItem(this.props.location.gasTypes[0])}
          {this.gasItem(this.props.location.gasTypes[3])}
          <button onClick={() => this.handleClick()}>Show More</button>
          <p>{this.props.location.restaurants[0].name}</p>
          <SlideDown closed={this.state.closed}>
            {this.props.location.gasTypes.map((type, index) => {
              return this.gasItem(type, index);
            })}
          </SlideDown>
        </div>
      </div>
    );
  }
}
