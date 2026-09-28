import React from 'react'

const Users = () => {
  const users=[{
    id:101,
    name:"goutham",
    branch:"CSE"
  },{
    id:102,
    name:"Tony",
    branch:"ECE"
  },{
    id:103,
    name:"Gmax",
    branch:"EEE"
  }]
    return (
    <div>
        {users.map((user,index)=>(
            <div key={index}>
                <h3>Name : {user.name}</h3>
                <p>id : {user.id}</p>
                <p>Branch : {user.branch}</p>
                <br />
            </div>
        ))}
    </div>
  )
}

export default Users