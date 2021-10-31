import React,{useState} from 'react'
import styled from 'styled-components';
import {useDispatch,connect} from 'react-redux';
import {closeModal} from '../actions';
import PostButton from './Enter';
import ReactPlayer from 'react-player';
import {createPost, getAllPost} from '../actions/post.js'

function PostModal({open,user}) {


    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const [disabled,setDisabled]=useState(false);
    
    const [media,setMedia]=useState("");
    const [shareImage,setShareImage]=useState("");
    const [videoLink,setvideoLink]=useState("");
      const handleMedia=(s)=>{
          setMedia(s);
      }
    
    const onchangeHandler=(e)=>{
        const image=e.target.files[0];
        if(image===""||image===undefined)
        {alert(`Please enter image in Valid Format. The image is ${typeof(image)}`)
        return;}
        setShareImage(image);
        
    }

    const onSubmitHandler=async(e)=>{
            e.preventDefault();
            let Url="";
            const post=e.target.elements.post.value;
            if(media==='image')
            {
                const image=e.target.elements.Image.files[0];
                const fd=new FormData();
                fd.append('avatar',image,image.name); 
                dispatch(createPost(fd,post));
                
            }
            if(media==='video')
            {
                Url=videoLink;
                // await dispatch(createPost(Url,post));
                
            } 
            
            dispatch(closeModal());
            reset();
        }
    

 
    const reset=()=>{
          setMedia("");
          setShareImage("");
          setvideoLink("");
    }
    
    return (
       
       <> { open &&
            <Container id="NewPost">
        
            <Content>
                <img src="images/close.svg" id="close" onClick={(e)=>{
                      e.preventDefault();
                     dispatch(closeModal())
                }}/>
                     <div style={{padding:"20px"}}>
                       <Post onSubmit={onSubmitHandler}>
                         <img src={"images/user.svg" }id="user"/>
                          <p style={{marginLeft:"5px"}}>{user.displayName}</p>
                          <Input>
                             <textarea placeholder={"What do you want to talk about?"} value={text} name="post" onChange={(e)=>{
                            e.preventDefault();
                            setText(e.target.value)
                             }}/>
                           </Input>
                       

                        <ShareBox>
                            {media&&media==="image"?<>
                             <input type="file" 
                                onChange={
                                    onchangeHandler}
                                 style={{display:'none' }}
                                 name="Image" id="Image"  
                                 accept='image/gif,image/jpeg,image/jpg'
                              />
                               <label htmlFor="Image">Select an Image to Share</label> 
                              </>


                             :<>
                              <input type="text" 
                               style={{width:"100%",padding:"5px"}}
                                placeholder={"Please Input a Video Link"}
                                onChange={(e)=>{
                                setvideoLink(e.target.value);

                               }}
                             />
                             </>
                         }
                         {media==="video"&&videoLink&&<ReactPlayer width={"100%"} url={videoLink} height={"200px"}/>}
                         {media==="image"&&shareImage&&<img src={URL.createObjectURL(shareImage)} width="100%" height="200px" />}
                      </ShareBox>
                          
                        <Media>
                            <button>
                              <img src="images/photo.svg" onClick={(e)=>{
                                e.preventDefault();
                                handleMedia("image");
                               }} />
                               </button>
                                <button>
                                 <img src="images/video.svg" onClick={(e)=>{
                                e.preventDefault();
                                handleMedia("video");
                            }}/>
                            </button>   
                        </Media>
                     <PostButton disabled={text===""} />
                     </Post>
                </div>
            </Content>
       
          </Container>
             }
            </>
   
    )
}

const Container=styled.div`
    top :0;
    bottom: 0;
    left:0;
    right:0;
    position: fixed;
    background:rgba(0,0,0,0.5);
    color:black;
    font-size:12px;
    font-weight: 600;
    z-index:1000;
    display: flex;
    justify-content: center;  
`;

const Content=styled.div`
   background: white;
   width:400px;
   max-height: 650px;
   position: relative;
   margin-top:80px;
   box-sizing:border-box;
   display: flex;
   align-items: center;
   justify-content: center;
   #close{
       position:absolute;
        height:20px;
        width:20px;
        min-width: auto;
        right:10px;
        top:10px;
        border:2px solid grey;
    }
    #user{
       height:70px;
       width:70px;
       border-radius: 50%;}

    @media(max-width:1000px)
    {
        width:90%;  
    }
    @media(max-width:500px)
    {
          width:90%;
    }
`;

const Post=styled.form`
    display:flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
    
`;

const Media=styled.div`
   float:left;
   display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
 
  img{
      width: 30px;
      height:30px;
   }
`;

const Input=styled.div`
   margin-top: 20px;
  textarea{
      height:100px;
      width: 300px;
      border:2px solid grey;
      resize:none;
      outline: none;
      padding:20px;
      @media(max-width:768px){
          width:300px;
      }
      @media(max-width:400px)
      {width:100px;}
  }
`;

const ShareBox=styled.div`
  margin: 20px 0px;
`;


const MapStateToProps=(state)=>{
    return {open:state.ModalState,user:state.userState.user}
}
export default connect(MapStateToProps)(PostModal)
