import React from 'react'

const Input_name = ({name,setName}) => {
  return (
    <div>
        <input type="text" onChange={(e)=>setName(e.target.value)} />
    </div>
  )
}

export default Input_name