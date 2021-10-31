const intitialState=localStorage.getItem('comments')
?JSON.parse(localStorage.getItem('comments')):null


const CommentReducer=(state=intitialState,action)=>{

   
    switch(action.type){

        case "SET_COMMENT":
            return action.payload;
        default:
            return state;
    }
}
export default CommentReducer;