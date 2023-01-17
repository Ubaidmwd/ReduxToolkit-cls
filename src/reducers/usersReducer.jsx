import { createReducer } from "@reduxjs/toolkit"
const initialstate={
    name:"ubaid",
    age:"24",
    status:"coder"
}

// export const userData = (state= initialstate, action) => {
//   if(action.type=='UPDATE'){
//     return {
//         ...state,
//         age:action.payload}

//   }
//   return state;
// }

export const userData= createReducer(initialstate,(builder)=>{
    builder.addCase('UPDATE',(state,action)=>{
        state.age=action.payload
    })
})