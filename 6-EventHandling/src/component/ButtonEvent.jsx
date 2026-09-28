import React from 'react'

const ButtonEvent = () => {
  function welcome(name) {
    alert(`Hello ${name} welcome to React`)
  }
    return (
    <div>
        <button onClick={()=>welcome("goutham")}>click</button>
    </div>
  )
}

export default ButtonEvent