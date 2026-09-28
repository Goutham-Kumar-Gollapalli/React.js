import React from 'react'
import Username from './Username'
const Profile = ({name}) => {
  return (
    <div>
        <h5>Profile</h5>
        <Username name={name}/>
    </div>
  )
}

export default Profile