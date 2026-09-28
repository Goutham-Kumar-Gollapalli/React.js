import React, { useState } from 'react'

const MiniFormSubmission = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [submitname,setSubmitname]=useState("");
  const [submitemail,setSubmitemail]=useState("");
  const [submitpassword,setSubmitpassword]=useState("");
            
  const handleSubmit=(e)=>{
    e.preventDefault();
    setSubmitname(name);
    setSubmitemail(email);
    setSubmitpassword(password);
    console.log(`Name : ${name}`);
    console.log(`Email : ${email}`);
    console.log(`Password : ${password}`);
  }
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setName(e.target.value)} /> <br />
            <input type="email" onChange={(e)=>setEmail(e.target.value)} /> <br />
            <input type="password" onChange={(e)=>setPassword(e.target.value)} /> <br />
            <button type='submit'>submit</button>
            <h1>{submitname}</h1>
            <p>{submitemail}</p>
            <p>{submitpassword}</p>
        </form>
    </div>
  )
}

export default MiniFormSubmission