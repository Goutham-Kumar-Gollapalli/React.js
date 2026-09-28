import React, { useMemo } from 'react'
import { useState } from 'react';
const App = () => {
  const [count,setCount]=useState(0);
  const [number,setNumber]=useState(1);

  function heavyCalculations(num)
  {
    console.log("Heavy calculation");
    for(let i=1;i<=100000000;i++){}
    console.log("calculated");
    return num+1;
  }
  const res=useMemo(()=>{
    return heavyCalculations(number);
  },[number])
  // const res=heavyCalculations(number);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)}>increase +1</button>

      <h2>{number}</h2>
      <button onClick={()=>setNumber(number+1)}>Number</button>
    </div>
  )
}

export default App