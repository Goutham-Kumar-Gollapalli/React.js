import React, { useEffect, useRef } from 'react'

const Auto_focus = () => {
  const myRef=useRef(null);
  useEffect(()=>{
    myRef.current.focus();
  },[myRef])
  return (
    <div>
        <input type="text" ref={myRef} placeholder='Auto focus'/>
    </div>
  )
}

export default Auto_focus