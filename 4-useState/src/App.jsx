import { useState } from "react";
import Child from "./component/Child.jsx"
import Counter from "./component/Counter.jsx"
function App() {
  const [count,setCount]=useState(0);
  return <>
        {/* <h1>{count}</h1>
        <Child number={count} counter={setCount}/> */}
        <Counter count={count} counter={setCount}/>
  </>
}

export default App
