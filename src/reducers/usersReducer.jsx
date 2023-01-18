import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
const initialState={
    userName:"ubaid",
    age:"24",
    status:"coder"
}
const fetchUsersName = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId: name, thunkAPI) => {
      const response = await userAPI.fetchById(userId)
      return response.data
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
    }
})

export const { updateName,updateAge} = userData.actions
export default userData.reducer