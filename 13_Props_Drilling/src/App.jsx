import React from 'react'
import {useState} from 'react'
import Dashboard from './components/Dashboard'
const App = () => {
  const [name,setName]=useState("Goutham");
  return (
    <div>
      <h1>App</h1>
      <Dashboard name={name}/>
    </div>
  )
}

export default App