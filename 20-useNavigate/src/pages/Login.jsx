import React from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate=useNavigate();
  function handleButton(){
    const Logedin=true;
    if(Logedin)
    {
        navigate("/",{replace:true});
    }
  }
    return (
    <div>
        <h3>Login</h3>
        <button onClick={handleButton}>Login</button>
    </div>
  )
}

export default Login