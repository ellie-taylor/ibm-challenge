import React from "react";
import places from "../static/places";
import sort from "../utils/sort";
import capitalise from "../utils/capitalise";


const Main = () => {

  const placesToSort = places;
  const sorted = sort(placesToSort);

  return (
    <div className="Main">
      <h3>The Brunchinator</h3>
      {sorted.map((place) => {
        return (
          <div key={place.name}>
            <span>
              {capitalise(place.name)}, {" "}
              {capitalise(place.area)}
              {console.log(place.name.indexOf(' '))}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
