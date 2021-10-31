
import moment from 'moment';
import axios from 'axios';
import { get } from 'mongoose';

const arrayBufferToBase64=(buffer)=> {
   var binary = '';
   var bytes = [].slice.call(new Uint8Array(buffer));
   bytes.forEach((b) => binary += String.fromCharCode(b));
   return window.btoa(binary);
};

export const createPost=(fd,content)=>async(dispatch,getState)=>{

   const {user}=getState().userState;

   const posts=getState().posts;
   const time=moment().format("MMM Do YY,h:mm");
     
    try{
        const {data}=await axios.post('/api/post/create',fd,
        {
        headers:{
            authorization:`Bearer ${user.token}`
                }
        })
        dispatch(updatePost({content,time},data._id));
        dispatch(getAllPost());
     }
     catch(e){
         console.log(e)
         dispatch({
             type:"POST_CREATE_FAIL",
             payload:e.message
         }) 
     }
}

export const updatePost=(updates,id)=>async(dispatch,getState)=>{

    const {user}=getState().userState;
    try{
        const {data}=await axios.patch(`/api/post/update/${id}`,{updates},{
            headers:{
            authorization:`Bearer ${user.token}`
                }
        })
       dispatch(getAllPost())
    }
    catch(e){
      console.log(e)
    }
}

export const getAllPost=()=>async(dispatch,getState)=>{

    const {user}=getState().userState;
    try{
        const {data}=await axios.get('/api/post/allPost',{
            headers:{
            authorization:`Bearer ${user.token}`
                }
        })
      
        const arr=data.map((post)=>{
              return {...post,image:`data:image/png;base64,${arrayBufferToBase64(post.image.data)}`}
        })
        arr.reverse();
        dispatch({
            type:"POST_FETCH_SUCCESS",
            payload:arr
        })
        localStorage.setItem('posts',JSON.stringify(arr));
        
    }
     catch(e){
         console.log(e)
              dispatch({
                  type:"POST_FETCH_FAIL",
                  payload:e.message
              })
     }
}



export const updateVisibilty=(show,id)=>async(dispatch,getState)=>{
    const {user}=getState().userState;
   
    const updates={showComment:show}
    try{
         const {data}=await axios.patch(`/api/post/update/${id}`,{updates},{
            headers:{
            authorization:`Bearer ${user.token}`
                }})
        
                dispatch(getAllPost());
       }
    catch(e){
         
    }
 }




