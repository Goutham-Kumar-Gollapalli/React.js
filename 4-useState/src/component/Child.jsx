import React, { useState } from 'react'

const Child = ({number,counter}) => {
  
    const handleClick=()=>{
        counter(number+5);
    };

    return (
    <>
        <button type="button" onClick={handleClick}>click</button>
    </>
  );
}

export default Child