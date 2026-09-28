import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>Url not found try again,Go to <Link to={"/"}>Home page</Link></div>
  )
}

export default NotFound