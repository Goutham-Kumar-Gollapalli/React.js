import React from 'react'
import { useState } from 'react';
import Counter from './Components/Counter';
import Reset from './Components/Reset';
import Display_Name from './Components/Display_Name';
import Input_name from './Components/Input_name';
const App = () => {
  const [name,setName]=useState("");
  // const [count,setCount]=useState(0);
  return (
    <div>
      {/* <Counter count={count} setCount={setCount}/> */}
      {/* <Reset setCount={setCount}/> */}
      <Input_name name={name} setName={setName}/>
      <Display_Name name={name}/>
    </div>
  )
}

export default App