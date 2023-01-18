import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
const initialState={
    userName:"ubaid",
    age:"24",
    status:"coder"
}
export const fetchUsersName = createAsyncThunk(
    'fetchUsers',
    async () => {
        const res=await fetch('https://jsonplaceholder.typicode.com/users')
        const res2=await res.json()
    //   const response = await userAPI.fetchById(userId)
    //   return response.data
        return res2[0].name
    })
  
const userData=createSlice({
    name:"users",
    initialState,
    reducers:{
        updateName(state,action){
            state.userName=action.payload
        },
        updateAge(state,action){
            state.age=action.payload
        }
    },
    extraReducers:{

    [fetchUsersName.fulfilled]:(state, action) => {
        
        state.userName=action.payload
      }
    }
})

export const { updateName,updateAge} = userData.actions
export default userData.reducer