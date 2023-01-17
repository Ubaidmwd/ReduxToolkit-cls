import { configureStore } from "@reduxjs/toolkit";
import  userData  from "../reducers/usersReducer";

export const store=configureStore({
    reducer:{users:userData}

    
})