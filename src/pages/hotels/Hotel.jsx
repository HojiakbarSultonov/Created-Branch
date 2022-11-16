import React, { useState, useContext } from "react";
import { StateContext } from "../../context";

function Hotel({ id, hotelName, image, price, hotel }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { dispatch } = useContext(StateContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const startKuni = new Date(startDate);
    const endKuni = new Date(endDate);
    const time = endKuni - startKuni;
    const kun = time / 1000 / 3600 / 24;
    const jamiNarxi = kun * price;
    const hotelData = {
      ...hotel,
      startDate,
      endDate,
      jamiNarxi,
      reservedDays: kun,
    };
    dispatch({ type: "ADD_TO_RESERVED", payload: hotelData });
  };
  const start = new Date(startDate)
  const end = new Date(endDate)
  console.log(start);
  console.log(end);
 
  const katta = end.getDay()
  const kichik = start.getDay()
  const result = katta - kichik
  console.log(katta);
  console.log(kichik);
  console.log(result);
  if(result < 0){
    alert("notogri sana")
    return
  }
  return (
    <div className="hotels">
      <h2>{id}</h2>
      <h2>{hotelName}</h2>
      <h2>Kunlik narx: {price} $</h2>
      <img width={"250px"} height={"250px"} src={image} alt="" />
      <form className="formInput" onSubmit={handleSubmit}>
        <input
          name="startDate"
          type="date"
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          name="endDate"
          type="date"
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}

export default Hotel;
