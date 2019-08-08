import React, { Component } from "react";

export const FilterByLocations = (props) => {
  return (
    <div>
      <span>Locations: </span>
      <select onChange={() => {}}>
        <option value="">--State--</option>
      </select>
      <select onChange={() => {}}>
        <option value="">--City--</option>
      </select>
      <select onChange={() => {}}>
        <option value="">--Highway--</option>
      </select>
    </div>
  );
};
