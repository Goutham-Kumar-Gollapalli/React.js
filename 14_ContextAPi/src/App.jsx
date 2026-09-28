import React from 'react'
import {useState} from 'react'
import UserContext from './ContextApi/UserContext'
import Dashboard from './component/Dashboard'
const App  = () => {
  const [name,setName]=useState("Goutham");
  const [count,setCount]=useState(100);
  return (
    <UserContext.Provider value={{name,count}}>
      <h3>App</h3>
      <Dashboard/>
    </UserContext.Provider>
  )
}

export default App 