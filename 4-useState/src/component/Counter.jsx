import React from 'react'

const Counter = ({count,counter}) => {
    const Increment=()=>{
        counter(count+1);
    }
    const Decrement=()=>{
        counter(count-1);
    }
    const Reset=()=>{
        counter(count*0);
    }
    return (
    <div>
        <h2>{count}</h2>
        <button onClick={Increment}> +1 </button>
        <button onClick={Decrement}> -1 </button>
        <button onClick={Reset}> Reset </button>
    </div>
  )
}

export default Counter