import { SET_USER, SIGN_OUT } from "../actions/constants";
const initialState={
    user:localStorage.userInfo?JSON.parse(localStorage.getItem('userInfo')):null
}

const userReducer=(state=initialState,action)=>{
    switch(action.type){

        case SET_USER:
            return{
                ...state,user:action.payload
            }
        case SIGN_OUT:
            return{user:null}
        
        default:
            return state;
    }

};

export default userReducer;

