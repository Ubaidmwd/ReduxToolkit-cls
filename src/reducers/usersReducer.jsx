const initialstate={
    name:"ubaid",
    age:"24",
    status:"coder"
}

export const userData = (state= initialstate, action) => {
  if(action.type=='UPDATE'){
    return {
        age:action.payload}

  }
  return state;
}