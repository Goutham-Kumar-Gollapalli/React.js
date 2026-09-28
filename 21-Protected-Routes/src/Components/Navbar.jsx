import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <Link to={"/"}><div>Home</div></Link>
        <Link to={"/login"}><div>Login</div></Link>
        <Link to={"/products"}><div>Products</div></Link>
    </div>
  )
}

export default Navbar