import React, { useState } from "react";
import places from "../static/places";
import sort from "../utils/sort";
import sortLoc from "../utils/sortLoc";
import capitalise from "../utils/capitalise";


const Main = () => {

  const [info, setInfo] = useState({
    name: "Dishoom",
    area: "Oxford Street",
    website: "https://www.dishoom.com/carnaby?utm_source=google&utm_medium=organic&utm_campaign=Yext&utm_content=D4-Carnaby&y_source=1_MjMwNDkyMDUtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
    phone: "020 7420 9322",
    imgUrl: "https://bacibacirestaurant.files.wordpress.com/2020/02/chairs-cutlery-fork-9315.jpg"
  });

  const placesToSort = places;
  const sorted = sort(placesToSort)

  function sortingName() {
    const sorted = sort(placesToSort);
    console.log("test 1")
  }

  function sortingLocation() {
    const sorted = sortLoc(placesToSort);
    console.log("test 2")
  }

  function updateState(place) {
    setInfo({name: place.name, area: place.area, website: place.website, phone: place.phone, imgUrl: place.imgUrl})
  }


  return (
    <div className="Main">
      <div className="Header">
        <h3>The Brunchinator</h3>
      </div>
      <div className="Grid"> 
        <div className="List"> 
          <h3> Venues </h3>
          {sorted.map((place) => {
            return (
              <div key={place.name}>
                <p onClick= { () => updateState(place)}>  {capitalise(place.name) }</p>
              </div>
            );
          })}
        </div>
        <div className="Info">
          <h3> {capitalise(info.name)} </h3>
          <img src = {info.imgUrl} alt={info.imgUrl}/>
          <h4> Location 📍 </h4>
          <p> {capitalise(info.area)} </p>
          <h4> Website 🌐 </h4>
          <p> {info.website} </p>
          <h4> Phone Number 📞 </h4>
          <p> {info.phone} </p>
        </div>
      </div>

      <div className="TournamentButton">
        { 
         <button onClick= {sortingName} type="button">Sort Alphabetically by Name</button>
        }
      </div>


      <div className="TournamentButton">
        { 
         <button onClick= {sortingLocation} type="button">Sort Alphabetically by Location</button>
        }
      </div>

    </div>
  );
};

export default Main;
