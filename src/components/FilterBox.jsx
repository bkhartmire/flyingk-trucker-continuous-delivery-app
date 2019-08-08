import React from "react";

const distances = [1, 5, 10];

export const FilterBox = (props) => (
  <div>
    <h3>Filter by distance:</h3>
    {distances.map((distance) => {
      return <FilterItem distance={distance} />;
    })}
  </div>
);

const FilterItem = (props) => {
  const name = `checkbox${props.distance}`;
  return (
    <div>
      <label for={name} class="checkbox_label">{`${props.distance}km`}</label>
      <input type="checkbox" name={name} />
    </div>
  );
};
