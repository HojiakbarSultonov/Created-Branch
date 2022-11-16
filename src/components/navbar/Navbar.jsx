import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <nav>
        <NavLink className="nav__link" to={'/'}>Home</NavLink>
        <NavLink className="nav__link" to={'/hotels'}>Hotel</NavLink>
        <NavLink className="nav__link" to={'/reserved'}>Reserved</NavLink>
       
    </nav>
  )
}

export default Navbar