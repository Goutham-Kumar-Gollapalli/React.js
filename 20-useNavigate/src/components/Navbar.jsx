import React from 'react'
import { NavLink,Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <Link to={"/"}> <button>Home</button></Link>&nbsp;&nbsp;&nbsp;
        <Link to={"/login"}> <button>Login</button></Link> &nbsp;&nbsp;&nbsp;
        <Link to={"/signup"}> <button>SignUp</button></Link> &nbsp;&nbsp;&nbsp;
        <Link to={"/about"}> <button>About</button></Link>
    </div>
  )
}

export default Navbar