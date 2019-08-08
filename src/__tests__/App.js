// import React from "react";
// import { mount } from "enzyme";
// import sinon from "sinon";

// import App from "./App.jsx";
// import { getMarkers } from "../utils/";
// jest.mock("../utils/");
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
configure({
  adapter: new Adapter(),
});

describe("the App component", () => {
  it("sums numbers", () => {
    expect(1 + 2).toEqual(3);
    expect(2 + 2).toEqual(4);
  });
  // let componentDidMountSpy;
  // let getSingleObjectSpy;
  // let listObjectsSpy;
  // let wrapper;

  // beforeEach(() => {
  //   wrapper = mount(<App />);
  // });

  // it("renders the App component to the DOM", () => {
  //   expect(
  //     wrapper
  //       .find(".app")
  //       .exists()
  //       .toEqual(true)
  //   );
  // });
});
