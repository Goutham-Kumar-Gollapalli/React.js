import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <NavLink to={"/"}><li>Home</li></NavLink>
        <NavLink to={"/Contact"}><li>Contact</li></NavLink>
        <NavLink to={"/About"}><li>About</li></NavLink>
    </div>
  )
}

export default Navbar