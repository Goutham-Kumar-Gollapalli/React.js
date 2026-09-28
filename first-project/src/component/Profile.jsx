import React from 'react'
import "./Profile.css"
const Profile = () => {
    let name="Goutham Kumar";
    let age=23;
    let country="India";
    return (
    <>
    <div className='profile'>
        <h2>Name : {name}</h2>
        <p>Age : {age}</p>
        <p>Country : {country}</p>
    </div>
        
    </>
  )
}

export default Profile