const initialState=localStorage.getItem('posts')?JSON.parse(localStorage.getItem('posts')):[];

const PostReducer=(state=initialState,action)=>{

    switch(action.type){
        case "POST_CREATE_SUCCESS":
            return action.payload;
        case "POST_CREATE_FAIL":
            return action.payload;
        case "POST_FETCH_SUCCESS":
            return action.payload;
        case "POST_FETCH_FAIL":
            return action.payload; 
        default :  
            return state;
    }
}

export default PostReducer;