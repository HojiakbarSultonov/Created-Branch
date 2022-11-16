import React, { useContext } from "react";
import { StateContext } from "../../context";

import "./Reserved.css";
import ReservedHotel from "./ReservedHotel";
function Reserved() {
  const { state,} = useContext(StateContext);
  console.log(state.reserved);

  // const hotelInfo = hotels.some((item) => item.id === Number(id));

  return <div className="reservedInfo">
    {state.reserved.length===0 && <h1>Mehmonxonalar bo'sh</h1>}
    {state.reserved.map(hotel=>(
      <ReservedHotel key = {hotel.id} {...hotel}/>
    ))}
  </div>;
}

export default Reserved;
