import React, { Component } from "react";

const temp = ["ATM", "WiFi", "Private Showers"];

export const FilterByAmenities = (props) => {
  return (
    <div>
      <span>Amenities: </span>
      {temp.map((amenity) => {
        return (
          <div key={amenity}>
            <label htmlFor="amenity">{amenity}</label>
            <input type="checkbox" name="amenity" />
          </div>
        );
      })}
    </div>
  );
};
