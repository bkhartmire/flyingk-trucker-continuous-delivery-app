import React from "react";

import App from "../App.jsx";

import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
configure({
  adapter: new Adapter(),
});

describe("the App component", () => {
  it("renders the app title", () => {
    const wrapper = shallow(<App />);
    const title = <h2>FlyingK Truck Stops</h2>;
    expect(wrapper.contains(title)).toEqual(true);
  });
});
