import React, { Component } from "react";
import "./StoreItem.css";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import Subway from "../images/subway.png";
import CarlsJr from "../images/carls-jr.png";
import Hardees from "../images/hardees.png";
import Arbys from "../images/arbys.png";
import GodfathersPizza from "../images/godfathers-pizza.png";
import TacoBell from "../images/taco-bell.png";
import BaskinRobbins from "../images/baskin-robbins.png";
import DairyQueen from "../images/2000px-Dairy_Queen_logo.png";
import Chesters from "../images/chesters.png";
//FlyingKSubs
import Dennys from "../images/dennys.png";
import BurgerKing from "../images/burger-king.png";
import DelTaco from "../images/del-taco.png";
import Wendys from "../images/1200px-Wendy's_logo_2012.png";
import McDonalds from "../images/mcdonalds.png";
import Sonic from "../images/1200px-Sonic_Drive-In_logo.png";
import Bojangles from "../images/Bojangles-Logo.png";
import DunkinDonuts from "../images/dunkin-donuts.png";
import GreenBurrito from "../images/green-burrito.png";
import IHOPExpress from "../images/ihop.png";
import TacoJohns from "../images/TJLogo-2c-copy.png";
const restaurants = {
  Subway,
  "Carl's Jr.": CarlsJr,
  "Hardee's": Hardees,
  "Arby's": Arbys,
  "Godfather's Pizza": GodfathersPizza,
  "Taco Bell": TacoBell,
  "Baskin Robbins": BaskinRobbins,
  "Dairy Queen": DairyQueen,
  "Chester's": Chesters,
  "Denny's": Dennys,
  "Burger King": BurgerKing,
  "Del Taco": DelTaco,
  "Wendy's": Wendys,
  "McDonald's": McDonalds,
  Sonic,
  "Bojangle's": Bojangles,
  "Dunkin' Donuts": DunkinDonuts,
  "Green Burrito": GreenBurrito,
  "IHOP Express": IHOPExpress,
  "Taco John's": TacoJohns,
};

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
          {l.restaurants.length > 0 &&
            l.restaurants.map((r) => {
              return <img src={restaurants[r.name]} alt={r.name} />;
            })}
          <span className="store-title">
            {l.preferredName} - {l.siteName}
          </span>
          {this.gasItem(l.gasTypes[0])}
          {this.gasItem(l.gasTypes[3])}
          <button onClick={() => this.handleClick()}>Show More</button>
          <p>{l.restaurants[0].name}</p>
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
