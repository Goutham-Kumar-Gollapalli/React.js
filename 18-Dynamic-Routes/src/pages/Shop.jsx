import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Shop = () => {
  return (
    <div>
      <h1>Shop</h1>
      <Link to="men"><button>Men</button></Link>
      <Link to="women"><button>women</button></Link>
      <Outlet/>
    </div>

  )
}

export default Shop