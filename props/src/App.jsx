import React from 'react'
// import Child from "./components/Child";
import Pizza from "./components/Pizza";
import pizzaImg from "./assets/pizza.webp";
const App = () => {
  // let name="Goutham";
  // let age=23
  const title="Pizza";
  const price=330;
  return (
    <div>
      {/* <Child name={name} age={age}/> */}
      <Pizza pizza={pizzaImg} title={title} price={price}/>
    </div>
  )
}

export default App