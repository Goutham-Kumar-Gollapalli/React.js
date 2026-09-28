import React from 'react'
import { useState,useCallback} from "react";
import Child from "./Child"
const App = () => {
  const [count,setCount]=useState(0);

  const handleClick=useCallback(()=>{
    setCount(prev=>prev+1);
  },[]);
  
  console.log("re-rendered");
  
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleClick}>Increase</button>

      <Child handleClick={handleClick}/>
    </div>
  )
}
export default App