import { hotels } from "./datas";
export const initialState = {
  allHotels: hotels,
  reserved: JSON.parse(localStorage.getItem("reservedHotels")) || [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_RESERVED":
      return (state = {
        ...state,
        reserved: [...state.reserved, action.payload],
      });
    case "REMOVE_FROM_RESERVED":
      return state;

    default:
      return state;
  }
};
