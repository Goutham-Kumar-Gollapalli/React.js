import React from 'react'

const App = () => {
  localStorage.setItem("name","Goutham kumar");
  const name=localStorage.getItem("name");
  // console.log(name);
  const user={
    name:"Goutham",
    age:22,
  }
  localStorage.setItem("users",JSON.stringify(user));
  return (
    <div>App</div>
  )
}

export default App