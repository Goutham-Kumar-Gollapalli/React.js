import React, { useState } from 'react'

const Fruits = () => {
  const [fruits,setFruits]=useState(["Apple","Banana"]);
  const [input,setInput]=useState("");
  function FruitAdd(){
    setFruits([...fruits,input]);
    setInput("");
  }
  function removeItem(index)
  {
    const newarray=[...fruits];
    newarray.splice(index,1);
    setFruits(newarray);
  }
    return (
    <div>
        {fruits.map((fruit,index)=>(
            <div key={index}>
                <p>{fruit}</p>
                <button type='submit' onClick={()=>removeItem(index)}>remove</button>
            </div>
        ))}
        <input type="text" 
        value={input}
        onChange={(e)=>setInput(e.target.value)}/>
        <button type='submit' onClick={FruitAdd}>submit</button>
    </div>
  )
}

export default Fruits