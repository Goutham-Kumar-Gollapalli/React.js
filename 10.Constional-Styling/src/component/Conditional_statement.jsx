import React from 'react'

const Conditional_statement = () => {
   const status=true;
  return (
    <div>
      <h1 style={{color:status?"green":"red"}}>{status?"Online":"Offline"}</h1>
    </div>
  )
}

export default Conditional_statement