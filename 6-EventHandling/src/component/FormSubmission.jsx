import React, { useState } from 'react'

const FormSubmission = () => {
  const [name,setName]=useState("");
  function handleSubmit(e){
    e.preventDefault();
    console.log(`submitted :  ${name}`);
  }  
  function typing(e)
  {
    setName(e.target.value);
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text"  onChange={typing}/>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default FormSubmission