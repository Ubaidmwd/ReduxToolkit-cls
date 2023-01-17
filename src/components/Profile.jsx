import React from 'react'
import { useSelector } from 'react-redux'
const Profile = () => {
    const {name,age,status}=useSelector((state)=>{return state})
  return (
    <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{status}</h1>


    </div>
  )
}

export default Profile