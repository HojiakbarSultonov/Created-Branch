import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import { useReducer } from "react";
import Navbar from "./components/navbar/Navbar";
import { StateContext } from "./context";
import { initialState, reducer } from "./reducer";
import Reserved from "./pages/reserved/Reserved";
import Hotels from "./pages/hotels/Hotels";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {reserved}=state;
  useEffect(() => {
    localStorage.setItem("reservedHotels",JSON.stringify(reserved))
  }, [reserved]);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/reserved" element={<Reserved />} />
        </Routes>
      </div>
    </StateContext.Provider>
  );
}

export default App;
// 1-create pages-Home,Hotels,Reserved
// hotels data create
// map hotels data to hotels page
// hotel component create
// create context and reducer and link them in APP.js
// reducer -initialState:AllHotels:hotels ,reserved
// create cases for reducer: addToReserve,RemoveFromReserved
// create date inputs in Hotel component
// date inputlarni orasini hisoblash va umumiy summani hisoblash
// add startDate,endDate and totalPrice to hotel object
// dispatch this hotel object to reserved array
// add cases to Hotel component
