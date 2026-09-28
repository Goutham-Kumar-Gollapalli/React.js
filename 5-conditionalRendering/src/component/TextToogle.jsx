import React from 'react'
import { useState } from 'react';
const Toogle = () => {
  const [show,setShow]=useState(false);
    // const handleButton=()=>{
    //     // if(show===false)
    //     // {
    //     //     setShow(true);
    //     // }
    //     // else
    //     // {
    //     //     setShow(false);
    //     // }
    //     setShow(!show);
    // }
    return (
    <div>
        <button onClick={()=>{setShow(!show)}}>
            {show?"Hide":"Show"}
        </button>
        {show && <p>This is secret message</p>}      
    </div>
  )
}

export default Toogle