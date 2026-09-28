import React from 'react'

const Child = ({handleClick}) => {
  console.log("Child re-rendered");
    return (
    <div>
        <button onClick={handleClick}>Child Click</button>
    </div>
  )
}

export default React.memo(Child);