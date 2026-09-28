import React, { useEffect, useRef, useState } from 'react'

const UseRef_Prev = () => {
  const [name1,setName1]=useState("");
  const [name2,setName2]=useState("");
  const prevName=useRef("");
  useEffect(()=>{
    prevName.current=name2;
  },[name2]);
  function add(){
    setName2(name1);
  }
    return (
    <div>
        <input type="text"  onChange={(e)=>{setName1(e.target.value)}}/>
        <button onClick={add}>add</button>
        <h3>Current val :{name2}</h3>
        <p>Prev val : {prevName.current}</p>
    </div>
  )
}

export default UseRef_Prev