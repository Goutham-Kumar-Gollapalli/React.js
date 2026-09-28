import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate=useNavigate();
    return (
    <div>
        <h3>Home</h3>
        <button onClick={()=>navigate("/about")}>Redirect to About</button>
    </div>
  )
}

export default Home