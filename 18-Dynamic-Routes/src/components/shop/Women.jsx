import React from 'react'
import womens from '../../data/women';

const Women = () => {
  return (
    <div>
      <h1>Women products details</h1>
      <div>
        {womens.map((item)=>(
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

export default Women