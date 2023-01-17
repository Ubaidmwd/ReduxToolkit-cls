import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { updateName,updateAge } from '../reducers/usersReducer'

const Profile = () => {
    const {userName,age,status}=useSelector((state)=>{return state.users})
    
    const dispatch=useDispatch()

    const update_Name=(name)=>{
        dispatch(updateName(name))
    }
    const update_Age=(age)=>{
        dispatch(updateAge(age))
    }
    

  return (
    <div>
        <h1>{userName}</h1>
        <h1>{age}</h1>
        <h1>{status}</h1>
        <button onClick={()=>update_Age(40)}> update_age</button>
        <button onClick={()=>update_Name('Ubaid Ullah Khan')}> update_name</button>

    </div>
  )
}

export default Profile