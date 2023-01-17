import { configureStore } from "@reduxjs/toolkit";

const initialstate={
    name:"ubaid",
    age:"24",
    status:"coder"
}

export const store=configureStore({
    reducer:(state)=>{return state},
    preloadedState:initialstate

    
})