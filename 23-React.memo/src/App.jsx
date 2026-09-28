import React, { useEffect } from 'react'
import {useState} from 'react';
import Child from './Child';
const App = () => {
  const [count,setCount]=useState(0);
  useEffect(()=>{
    console.log("re-rendered");
  },[count]);
  function handleBtn() {
    setCount(count+1);
  }
  return (
    <>
      <div>
      <h2>Count : {count}</h2>
      <button onClick={handleBtn}>increase + 1</button>
     
    </div>
     <Child/>
    </>
    
  )
}

export default App