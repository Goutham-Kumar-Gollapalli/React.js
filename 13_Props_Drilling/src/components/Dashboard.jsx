import React from 'react'
import Profile from './Profile'
const Dashboard = ({name}) => {
  return (
    <div>
        <h3>DashBoard</h3>
        <Profile name={name}/>
    </div>
  )
}

export default Dashboard