import React, { useState } from 'react'
import "./classname.css"
const ActiveAndInactive_UI = () => {
  const [tab,setTab]=useState("");
    return (
    <div>
        <button className={tab==="home"?"active1":""} onClick={()=>setTab("home")}>Home</button>
        <button className={tab==="contact"?"active1":""} onClick={()=>setTab("contact")}>Contact</button>
        <button className={tab==="about"?"active1":""} onClick={()=>setTab("about")}>About</button>
    </div>
  )
}

export default ActiveAndInactive_UI