import React from 'react'
import "./classname.css";
const Conditional_className = () => {
    const isActive=false;
  return (
    <div>
        <button className={isActive?"active":"inactive"}>
            {isActive?"Active":"Inactive"}
        </button>
    </div>
  )
}

export default Conditional_className