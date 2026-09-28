import React from 'react'

const Child = () => {
    console.log("Child rendered");
    
  return (
    <div>Child</div>
  )
}

export default React.memo(Child)