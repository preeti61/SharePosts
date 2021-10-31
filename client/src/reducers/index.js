import { combineReducers } from "redux";
import userReducer from './userReducer';
import {openModal} from "./openModal";
import signUp from './SignupIn.js';
import PostReducer from "./Post";
import CommentReducer from "./Comment";
const rootReducer=combineReducers({
    userState:userReducer,
    ModalState:openModal,
    Signup:signUp,
    posts:PostReducer,
    comments:CommentReducer
})

export default rootReducer;
