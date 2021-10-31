const signup=(state=false,action)=>{
  
    switch(action.type)
    {
       case "SIGN_UP":
           return true;
       case "SIGN_IN":
           return false;
    default:
        return state;
    }
}
export default signup 
