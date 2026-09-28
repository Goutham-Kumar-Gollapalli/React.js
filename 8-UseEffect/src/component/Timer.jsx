import React, { useEffect, useState } from 'react'

const Timer = () => {
  const [seconds,setSeconds]=useState(0);
    useEffect(()=>{
    console.log("Timer started");
    
            const timer=setInterval(()=>{
            setSeconds((prev)=>prev+1);
        },1000)
        
        return()=>{
            console.log("cleared");
            clearInterval(timer);
        }
    },[])
    return (
    <div>
        <h1>{seconds}</h1>
    </div>
  )
}

export default Timer