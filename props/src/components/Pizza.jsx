import React from 'react'
import "./Pizza.css";
const Pizza = (props) => {
  return (
    <div className='pizzaCard'>
        <img src={props.pizza} alt="Hello" className='img'/>
        <h2 className='title'>Title : {props.title}</h2>
        <p className='price'>Price : {props.price}/-</p>
        <button>Order Now </button>
    </div>
  )
}

export default Pizza