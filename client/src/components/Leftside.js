import React from 'react'
import styled from "styled-components";
import {connect} from 'react-redux';
function Leftside({user}) {
    return (
        <Container>
          <ArtCard>
              <UserInfo>
                  <CardBg/>
                      <a>
                          <Photo/>
                        <Link>Welcome,{user&&user.name?user.name:"there"}!</Link>
                      </a>
                      <a>
                          <AddPhoto>Add a photo </AddPhoto>
                      </a>
                  
              </UserInfo>
              <Widget>
                  <a>
                    <div>
                       <span>Connections</span>
                       <span>Grow Your Network</span>
                    </div>
                   <img src="images/widget-icon.svg"/>
                  </a>
              </Widget>
              <Item>
                  <span>
                      <img src="images/item-icon.svg"/>
                      My Items
                  </span>
              </Item>
            </ArtCard>

            <CommunityCard>
              <TopPart>
              <Content>
                <a>Groups</a>
                <a>Events</a>
                <a>Follow Hashtags</a>
              </Content>
              <span>
                <img src="/images/plus-icon.svg"/>
              </span>
              </TopPart>
                <Bottom>
                  <a>Discover More</a>
                </Bottom>
              </CommunityCard>  
        </Container>
    )
}



const ArtCard=styled.div`
  text-align:center;
   border-radius:5px;
   background: #fff;
   margin-bottom: 8px;
   overflow: hidden;
   transition: box-shadow 83ms;
   position: relative;
   border:none;
   box-shadow:0px 0px 1px 1px rgba(0,0,0,15%) inset;

`;
const Container=styled.div`
  grid-area:leftside
`;
const UserInfo=styled.div`
padding: 12px 12px 16px;
word-wrap: break-word;
word-break: break-word;
border-bottom:1px solid rgba(0,0,0,0.15)`;


const CardBg=styled.div`
background: url("/images/card-bg.svg");
background-position: center;
background-size: 462px;
height:54px;
margin:-12px -12px 0;
`;
const Photo=styled.div`
background:url("/images/photo.svg");
width:72px;
height: 72px;
background-position: center;
box-sizing: border-box;
background-clip: content-box;
background-color: white;
background-size: 60%;
background-repeat:no-repeat;
margin:-38px auto 12px;
border-radius: 50%;
;
`;
const Link=styled.div`
font-size: 16px;
line-height: 1.5;
color:rgba(0,0,0,0.9);
font-weight:600;

`;
const AddPhoto=styled.div`
color: #0a66c2;
margin-top: 4px;
font-size: 12px;
line-height: 1.33;
font-weight: 700;
`;

const Widget=styled.div`


a{
display: flex;
align-items: center;
justify-content: space-around;
border-bottom: 1px solid rgba(0,0,0,0.15);
padding:4px 12px;

  &:hover{
    background-color:rgba(0,0,0,0.08)
  }

  div{
    display: flex;
    margin:12px auto 12px 12px;
    flex-direction: column;
    text-align:left;
    
       span{
        font-size: 14px;
        line-height: 1.5;
        font-weight:600;
        &:first-child
        {
          color:rgba(0,0,0,0.6)
        }
         &:nth-child()
         {
           color:rgba(0,0,0,1)
         }
       }
  }
  
}

`;
const Item=styled.a`
     border-color: rgba(0,0,0,0.8);
     padding: 12px;
     display: flex;
     font-size: 14px;
     span{
      text-align:left;
      margin:auto 12px;
      font-weight:600;
     }
    &:hover{
      background-color:rgba(0,0,0,0.08);
    }
     
`;

const CommunityCard=styled.div`

background-color: white;
border-radius: 5px;
box-shadow:inset 0 0 0 1px rgba(0,0,0,0.15);

`;
const TopPart=styled.div`
 padding:12px;
   display:flex;
   align-items: center;
   justify-content: space-between;
   border-bottom: 1px solid rgba(0,0,0,0.08);
   transition-duration:167ms;
   &:hover{
    background-color: rgba(0,0,0,0.06);
  }
`;

const Content=styled.div`
   display: flex;
   flex-direction: column;
   padding: 12px;
   
   a{
     line-height: 2.5;
     font-size: 14px;
     font-weight: 600;
   }
 
`;

const Bottom=styled.div`
  display: block;
  text-align:left;
  font-size: 14px;

  color: rgba(0,0,0,0.6);
  padding:12px 12px 12px 24px;
  transition-duration:167ms;
   &:hover{
    background-color: rgba(0,0,0,0.06);
  }
;`
const mapStateToprops=(state)=>{
  return {user:state.userState.user}
}
export default connect(mapStateToprops)(Leftside);