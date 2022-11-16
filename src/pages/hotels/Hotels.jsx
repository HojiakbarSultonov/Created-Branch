import React from "react";

import { hotels } from "../../datas";

import "./Hotel.css";
import Hotel from "./Hotel";

function Hotels() {
  return (
    <div className="chooseHotel">
      {hotels.map((hotel) => (
        <Hotel key={hotel.id} hotel={hotel}  {...hotel} />
      ))}
    </div>
  );
}

export default Hotels;
