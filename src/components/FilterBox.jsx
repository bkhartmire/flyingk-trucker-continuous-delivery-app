import React from "react";

const distances = [1, 5, 10];

export const FilterBox = (props) => (
  <div>
    <h2>Filter by distance:</h2>
    {distances.map((distance) => {
      return <FilterItem distance={distance} key={distance} />;
    })}
  </div>
);

const FilterItem = (props) => {
  const name = `checkbox${props.distance}`;
  return (
    <div>
      <label htmlFor={name} className="checkbox_label">{`${
        props.distance
      }km`}</label>
      <input type="checkbox" name={name} />
    </div>
  );
};
