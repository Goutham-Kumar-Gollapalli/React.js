import React from 'react'
import { NavLink } from 'react-router-dom'
import "../App.css"
const Navbar = () => {
  return (
    <div className='navbar'>
        <NavLink to={"/"} className="home"><li>Home</li></NavLink>
        <NavLink to={"/products"} className="products"><li>Products</li></NavLink>
        <NavLink to={"/about"}  className="about"><li>About</li></NavLink>
        <NavLink to={"/shop"}  className="shop"><li>shop</li></NavLink>

    </div>
  )
}

export default Navbar