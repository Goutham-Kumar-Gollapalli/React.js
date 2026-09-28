import React from 'react'
import mens from '../../data/men';
const Men = () => {
  return (
    <div>
      <h1>Mens Products Details</h1>
      <div>
        {mens.map((item)=>(
          <div key={item.id}>
            <p>name : {item.title}</p>
            <p>price : {item.price}</p>
            <p>description : {item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Men;