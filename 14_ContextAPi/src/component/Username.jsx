import React from 'react'
import { useContext } from 'react'
import UserContext from '../ContextApi/UserContext'
const Username = () => {
  const {name,count}=useContext(UserContext);
  return (
    <div>
      <p>Username - {name}</p>
      <p>count - {count}</p>
    </div>
  )
}

export default Username