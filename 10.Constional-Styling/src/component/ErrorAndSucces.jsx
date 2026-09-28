import React, { useState } from 'react'
import "./classname.css";
const ErrorAndSucces = () => {
    const [name,setName]=useState("");
    const [msg,setMsg]=useState("");
    const [type,setType]=useState("");
    function handleSubmit(){
        if(name.trim()==="")
        {
            setMsg("please enter your name");
            setType("error");
        }
        else
        {
            setMsg("Name looks good");
            setType("success");
        }
    }
    return (
    <div>
        <input type="text"  onChange={(e)=>setName(e.target.value)}/>
        <button type='submit' onClick={handleSubmit}>submit</button>
        <h3>{msg && <p className={type==="error"?"inactive":"active"}>{msg}</p>}</h3>
    </div> 
  )
}

export default ErrorAndSucces