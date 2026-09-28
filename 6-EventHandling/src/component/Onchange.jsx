import React, { useState } from 'react'

const Onchange = () => {
  const [text,setText]=useState("");
    return (
    <div>
        <input type="text" onChange={(e)=>setText(e.target.value)}/>
        <p>{text}</p>
    </div>
  )
}

export default Onchange