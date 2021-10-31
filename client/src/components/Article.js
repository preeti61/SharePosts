import React,{useEffect, useState} from 'react'
import styled from "styled-components";
import {useDispatch,useSelector} from 'react-redux';
import { updatePost, updateVisibilty } from '../actions/post';
import { addComment, fetchComment } from '../actions/comment';

function Article({post}) {
  const {user,image,likes,comment,content,_id,time,showComment}=post;
  const [commentText, setcommentText] = useState("")
  const comments = useSelector(state => state.comments);
 
  
  const posts=useSelector(state=>state.posts) 
  
   
     
    const dispatch = useDispatch();
    return (
        <Post>
          <User>
               <img src="images/user.svg"/>
               <div>
                  <div>{content}</div>
                  <div>{user}</div>
                  <div>{time}</div>
               </div>
             </User>
             <Dots>. . .</Dots>
             <img src={image} className="post"/>
           
           <img src=""/>
           <ShareCount>
             <li>
               <button>
                 <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"/>
                 <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"/>
                 <span>{likes}</span>
               </button>
             </li>
             <li>
               <a>{comment} comment</a>
             </li>
           </ShareCount>
             <SocialActions>
             <button onClick={()=>{
               dispatch(updatePost({likes:likes+1},_id));
             }}>
             <img src="images/like.svg"/>
             <span>Like</span>
           </button>
           <button onClick={()=>{
             dispatch(updateVisibilty(1,_id));
             dispatch(fetchComment(_id));
           }} >
            
             <img src="images/comment.svg"/>
             <span>Comments</span>
           </button>
           <button>
             <img src="images/share.svg"/>
             <span>Share</span>
           </button>
             </SocialActions> 
             <ShareBox>
            <img src={"images/user.svg"}/>
            <NewPost >
              <input type="text" placeholder="Start Commenting" onChange={(e)=>{
                setcommentText(e.target.value)
              }} value={commentText}/>
            </NewPost>
              <button onClick={()=>{
                 dispatch(updatePost({comment:comment+1},_id));
                 dispatch(addComment(commentText,_id));
                 setcommentText("");

              }}>Add</button>
          </ShareBox> 
           
          <CommentBox>
            {(showComment===1)&&<div>
             
                 {comments.length?(comments.map((comment)=>{
                   return <Comment>{comment.content}</Comment>
                 })):("0 Comments")}
              <button onClick={()=>{dispatch(updateVisibilty(0,_id))}}>Hide</button>
              </div>}
          
          </CommentBox>
          
           
        </Post>
    )
}


const Post=styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
margin-top: 12px;
box-shadow:inset 0 0 0 1px rgba(0,0,0,0.15);
border-radius: 5px;
padding:16px 12px 16px;
background-color: white;
position: relative;
.post{
width:100%;
margin-top:80px;
}
`;

const User=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
position: absolute;
left:12px;
top:12px;
img{
  width:60px;
  height: 60px;
}
div{
  line-height:1.8;
  font-size: 12px;
  margin-left:6px;
}

`;
const Dots=styled.div`
position: absolute;
top:12px;
right:12px;
font-weight:1000;

`;

const ShareCount=styled.div`
 list-style: none;
 display: flex;
 align-items: center;
 text-align:center;
 width:100%;
 margin: 0 16px;
 padding: 8px 0;
 border-bottom: 1px solid #e9e5df;
 li{
   margin-right: 5px;
   font-size: 12px;
    button{
      display: flex;
    }
 }
`;

const SocialActions=styled.div`
display: flex;
flex-wrap: nowrap;
align-items: center;
padding-top: 16px;
justify-content:flex-start;
text-align: left;
width:100%;
button{
  padding: 8px;
  display:inline-flex;
  align-items: center;
}
`;

const ShareBox=styled.div`
display:flex;
color:#958b7b;
margin:0 0 8px;
width:100%;
justify-content: space-between;
align-items: center;
background:white;
padding:12px;
img{
  width:60px;
  height:60px;
  border-radius:50%;

}
`;

const NewPost=styled.div`
background-color: white;
padding:18px;
box-sizing:border-box;
flex:0.98;
display: flex;
border-radius: 24px;
align-items: center;
box-shadow: inset 0 0 0 1px rgba(0,0,0,0.15);
input{
width:100%;
border:none;
outline: none;
font-weight: 600;
  font-size: 14px;
::placeholder{
  color:rgba(0,0,0,0.6);
  font-weight: 600;
  font-size: 14px;
}
}
`;

const CommentBox=styled.div`
padding:12px;
width: 100%;
`;

const Comment=styled.div`
border:1px solid rgba(0,0,0,0.08);
padding:12px;
width: 100%;
margin-bottom: 5px;
`;
export default Article
