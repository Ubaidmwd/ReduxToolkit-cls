import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { userUpdate } from '../actions/useraction'

const Profile = () => {
    const {name,age,status}=useSelector((state)=>{return state.userData})
    const dispatch=useDispatch()
    const update=(age)=>{
        dispatch(userUpdate(age))
    }


  return (
    <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{status}</h1>
        <button onClick={()=>update(40)}> update</button>

    </div>
  )
}

export default Profile