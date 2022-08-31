import React, { useState } from "react";
import places from "../static/places";
import sort from "../utils/sort";
import capitalise from "../utils/capitalise";


const Main = () => {

  const [order, setOrder] = useState(places)


  const [info, setInfo] = useState({
    name: "Breakfast club",
    area: "london bridge",
    website: "http://www.thebreakfastclubcafes.com/locations/london-bridge/",
    phone: "020 7078 9634",
    imgUrl: "https://www.bruncher.com/media/2053/the-breakfast-club-london-bridge.jpg?anchor=center&mode=crop&width=1200&height=630&rnd=131757767200000000"
  });

  const placesToSort = places;

  function updateOrder() {
    const sorted = sort(placesToSort)
    setOrder(sorted)
  }

  function updateState(place) {
    setInfo({name: place.name, area: place.area, website: place.website, phone: place.phone, imgUrl: place.imgUrl})
  }


  return (
    <div className="Main">
      <div className="Header">
        <h2>The Brunchinator</h2>
      </div>
      <div className="Grid"> 
        <div className="List"> 
          <h3> Venues </h3>
          {order.map((place) => {
            return (
              <div key={place.name}>
                <p id ="current" onClick= { () => updateState(place)}> {capitalise(place.name) }</p>
              </div>
            );
          })}

          <div>
            { 
            <button class= "button1" onClick= { () => updateOrder()} type="button">Sort by Name</button>
            }
          </div>

        </div>
        <div className="Info">
          <h3> {capitalise(info.name)} </h3>
          <img src = {info.imgUrl} alt={info.imgUrl}/>
          <h4> Location 📍 </h4>
          <p> {capitalise(info.area)} </p>
          <h4> Phone Number 📞 </h4>
          <p> {info.phone} </p>
          <h4> <a href={info.website}>Website 🌐</a></h4>
        </div>
      </div>



    </div>
  );
};

export default Main;
