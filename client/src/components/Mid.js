import React,{useEffect,useState} from 'react'
import styled from "styled-components";
import PostModal from './PostModal';
import {connect, useDispatch,useSelector} from 'react-redux';
import { openModal } from '../actions';
import { getAllPost } from '../actions/post';
import Article from './Article';

function Mid(){
const dispatch = useDispatch();
const user = useSelector(state => state.userState.user);
const posts=useSelector(state=>state.posts);

useEffect(() => {
  dispatch(getAllPost());
}, [])
  
  return (
      <Container>
         <CommonCard>
          <ShareBox>
            <img src={"images/user.svg"}/>
            <NewPost onClick={(e)=>{
                         e.preventDefault();
                         dispatch(openModal())
            }}>
              <input type="text" placeholder="Start a post"/>
            </NewPost>
          </ShareBox>

          <Media>
            <Type>
               <img src="images/image.svg"/>
               <span style={{color:"#75e2fa"}}>Photo</span>
            </Type>
            <Type>
               <img src="images/video.svg"/>
               <span style={{color:"#6dbf15"}}>Video</span>
            </Type>
            <Type>
               <img src="images/event.svg"/>
               <span style={{color:"#bf6715"}}>Event</span>
            </Type>
            <Type>
               <img src="images/articles.svg"/>
               <span style={{color:"#de7ad7"}}>Write article</span>
            </Type>
          </Media>
         </CommonCard>
         <MyPosts className="posts">
          {
            posts&&posts.length?posts.map((post)=>{
                    return <Article post={post} key={post._id}/>
            }):<>Start Post</>
          }
           </MyPosts >
           <PostModal/>
      </Container>
  )
}

const CommonCard=styled.div`
text-align:center;
overflow:hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius:5px;
position:relative;
border:none;
box-shadow:inset 0 0 0 1px rgba(0,0,0,0.15);

`;
const ShareBox=styled.div`
display:flex;
color:#958b7b;
margin:0 0 8px;
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

const Container=styled.div`
grid-area: mid;
.posts::-webkit-scrollbar {
display: none;
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
  font-size: 14px;
::placeholder{
  color:rgba(0,0,0,0.6);
  font-weight: 600;
  font-size: 14px;
}
}
`;

const Media=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding:12px;
padding-bottom: 20px;
flex-wrap: wrap;
`;

const Type=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-size: 12px;
font-weight: 700;
span{
margin-left:5px;
}
`;
const MyPosts=styled.div`
height:600px;
overflow-y: scroll;

`;

const mapStateToprops=(state)=>{
return {
    posts:state.posts
};
}


export default connect(mapStateToprops) (Mid)
