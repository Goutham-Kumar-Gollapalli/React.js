import React from 'react'

const Login = ({isAuth,setIsAuth}) => {
 
  function handleLogin(){
    setIsAuth(!isAuth);
  }
  return (
    <>
    <div>Login</div>
     {/* <Link></Link> */}
    <button onClick={handleLogin}>
          {
          isAuth ? "Logout":"Login"
        }
    </button>

    </>
  )
}

export default Login