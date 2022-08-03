import React from "react";
import places from "../static/places";
import sort from "../utils/sort";
//🐨💰: Are you here to do the sorting? Good, you're in the right place!
// There are many ways to do this, we're going to attempt one...

const Main = () => {
  //💰: Let's create a variable for our array here, something like
  const placesToSort = places;
  const sorted = sort(placesToSort);
  // Then we should sort it. To do so, we can use localeCompare
  // 🐨: note to self, look up "localeCompare" right? 😉
  // 💰: I've put the function in a seperate file, so you can try it yourself first!
  // If you need it, check out `./sort.js`
  // Once you've got your sorted value into a variable, render it like the below
  return (
    <div className="Main">
      <h3>The Brunchinator</h3>
      {sorted.map((place) => {
        return (
          <div key={place.name}>
            <span>
              {place.name}, {place.area}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
