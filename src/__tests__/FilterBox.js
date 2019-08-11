import React from "react";

import FilterBox from "../components/FilterBox.jsx";

import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
configure({
  adapter: new Adapter(),
});

describe("the FilterBox component", () => {
  it("renders the  filterbox title", () => {
    const wrapper = shallow(<FilterBox />);
    const title = <h3>Filter by criteria:</h3>;
    expect(wrapper.contains(title)).toEqual(true);
  });
});
