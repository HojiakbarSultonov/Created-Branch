import React from "react";

function ReservedHotel({image, hotelName, jamiNarxi}) {
  return <div className="reservedHotel">
    <img width={"250px"} height={"250px"} src={image} alt="" />
    <h2>{hotelName}</h2>
    <em>{jamiNarxi} $</em>
    <button>Delete</button>
  </div>;
}

export default ReservedHotel;
