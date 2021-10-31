
import { SET_USER,SIGN_OUT } from "./constants";


import axios from 'axios';
import { getAllPost } from "./post";

export const RegisterUser=(email,password,name)=>async(dispatch)=>{
    try{
        
        const {data}=await axios.post('/api/user/register',{email,password,name});
        dispatch({
            type:SET_USER,
            payload:data
        })
         
        localStorage.setItem('userInfo',JSON.stringify(data));
       
    }
    catch(e){
        let error;
        if(e.response.status===409)
            error="Email Already registered"
        else
        error="Register Failed !!!"
        dispatch({
            type:'USER_REGISTER_FAIL',
            payload:error
        })
    }
}



export const SignInApi=(email,password) =>async(dispatch)=>{
        
        try{
            const {data}=await axios.post('/api/user/signin',{email,password});
            dispatch({
                type:SET_USER,
                payload:data
            })
            
            localStorage.setItem('userInfo',JSON.stringify(data))
           
         }
        
       
        catch(e){
            console.log(e.message)
        }
    
}


export function SignOutApi(){

    return (dispatch)=>{
try{
    dispatch({
        type:SIGN_OUT
    })
    
    localStorage.removeItem('userInfo');
    localStorage.removeItem('posts');
}
            
catch(e){
            console.log(e)
        }
    }
}

export function postArticle(payload){

    return (dispatch)=>{
        if(payload.image!==""){
        
        
      }
    }
}
export function closeModal(){
    return (dispatch)=>{
            dispatch({
            type:"CLOSE_MODAL"
            })
    }
}

export function openModal(){
    return (dispatch)=>{
            dispatch({
            type:"OPEN_MODAL"
            })
    }
}

export function signin(){
    return (dispatch)=>{
            dispatch({
            type:"SIGN_IN"
            })
    }
}

export function signup(){
    return (dispatch)=>{
            dispatch({
            type:"SIGN_UP"
            })
    }
}