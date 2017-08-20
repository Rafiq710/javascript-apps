const userReducer = (state={},action) =>{
  console.log(action.payload);
    switch(action.type){
        case "Enter":
               state = {
                   ...state,
                   name:action.payload.name,
                   age:action.payload.age,
                   email:action.payload.email
               }
            break;
        default:
            break;
    }
    console.log(state);
    return state;
}

export default userReducer;