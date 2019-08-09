import React from "react";
import FilterByLocations from "./FilterByLocations";
import FilterByTypes from "../containers/FilterByTypes";

export const FilterBox = () => (
  <div>
    <h2>Filter by criteria:</h2>
    <FilterByLocations />
    <FilterByTypes />
  </div>
);
