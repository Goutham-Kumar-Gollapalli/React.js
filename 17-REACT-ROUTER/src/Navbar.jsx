import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import "./App.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <NavLink to="/" className={({isActive})=>isActive?"active":""}><li>Home</li></NavLink>
        <NavLink to="/contact"><li>Contact</li></NavLink>
        <NavLink to="/about"><li>About</li></NavLink>
      </ul>
    </div>
  )
}

export default Navbar