import React,{useState,useRef} from 'react'

const Counter_Ref = () => {
    const [count,setCount]=useState(0);
    const inputRef=useRef(null);
    
    function add(){
        setCount(count+Number(inputRef.current.value));
    }
    return (
    <div>
        <input ref={inputRef} />
        <button onClick={add}>click</button>   
        <h1>{count}</h1> 
    </div>
  )
}

export default Counter_Ref