import React from "react";
import { FilterByLocations } from "./FilterByLocations";
import { FilterByTypes } from "./FilterByTypes";
import { FilterByAmenities } from "./FilterByAmenities";

export const FilterBox = () => (
  <div>
    <h3>Filter by criteria:</h3>
    <FilterByLocations />
    <FilterByTypes />
    <FilterByAmenities />
  </div>
);
