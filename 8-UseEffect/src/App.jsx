import React, { useState } from 'react'
import Timer from './component/Timer';

const App = () => {
  const [show,setShow]=useState(false);
  return (
    <div>
      <button onClick={()=>setShow(!show)}>
        {show && show?"Stop Timer":"Start Timer"}
        
      </button>
      {show && <Timer/>}
    </div>
  )
}

export default App