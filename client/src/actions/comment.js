import axios from 'axios';
import moment from 'moment';
export const addComment=(content,post_id)=>async(dispatch,getState)=>{
   
    const {user}=getState().userState;
    
    const time=moment().format("MMM Do YY,h:mm");

    
    //  console.log(content,time,post_id,user._id)
    try{
   
       const {data}=await axios.post('/api/comment/add',{content,time,post_id,user_id:user._id},{
       headers:{
        authorization:`Bearer ${user.token}`
       }})
       
       }
    catch(e){
        console.log(e);
    }
};



export const fetchComment=(id)=>async(dispatch,getState)=>{
   
    const {user}=getState().userState;
   //  console.log(getState())
     try{
        const {data}=await axios.get(`/api/comment/getComments/${id}`)
               dispatch({type:"SET_COMMENT",
               payload:data
            })
           localStorage.setItem('comments',JSON.stringify(data));
         //   console.log(getState())
      }
     catch(e){
        console.log(e);
     }
}

