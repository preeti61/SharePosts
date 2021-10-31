import styled from "styled-components";
import {connect, useDispatch} from 'react-redux';
import React from 'react'
import { SignOutApi } from "../actions";

const images=[["/images/nav-home.svg","Home"],["/images/nav-network.svg","Network"],["/images/nav-jobs.svg","Jobs"],
["/images/nav-messaging.svg","Messaging"],["/images/nav-notifications.svg","Notifications"]]


 function Header(props) {

    const dispatch = useDispatch();
     const userstate=props.user;
    return (
        <Container>
            <Content>
                <Logo>
                <img src="/images/home-logo.svg"/>
                </Logo>
                <Search>
                <SearchIcon><img src="/images/search-icon.svg"/></SearchIcon>
                    <div><input type="text" placeholder="Search"/></div>
                </Search>

                <Nav>
                 
                <NavListWrap>
                    {
                    
                        images.map((img)=>{
                              return (
                              
                                <NavList key={img[0]}>
                                <a> 
                                     <img src={img[0]}/>
                                     <span>{img[1]}</span>
                                </a>
                                </NavList>
                            
                            
                              )
                        })
                    }

                    <User>
                        <a> 
                    {userstate && userstate.photoURL?(<img src={userstate.photoURL}/>):( <img src="/images/user.svg"/>)}
                           <span>Me</span>
                           <img src="/images/down-icon.svg"/>
                        </a>

                        <SignOut onClick={()=>{
                               dispatch(SignOutApi())
                            }}>
                            <a>
                                Sign Out
                            </a>
                        </SignOut>
                    </User>
                      
                    <Work>
                        <a> 
                           <img src="/images/nav-work.svg"/>
                           <span>Work
                           <img src="/images/down-icon.svg"/>
                           </span>
                           
                        </a>
                    </Work>

                    </NavListWrap>                 
                </Nav>
            </Content>
        </Container>
    )
}


const Container=styled.div`
background: white;
border-bottom: 1px solid rgba(0,0,0,0.08);
left:0;
padding: 0 24px;
position: fixed;
top:0;
width:100%;
z-index:100;

`;
const Content=styled.div`
display:flex;
align-items:center;
margin:0 auto;
min-height:100%;
`;

const Logo=styled.span`
  margin-right: 8px;
  font-size:0px;
  
`;

const Search=styled.div`
opacity: 1;
flex-grow: 1;
position:relative;
display:flex;
align-items: center;
max-width: 280px;
background: #eef3f8;
&>div{
    max-width: 280px;
    input{
        border:none;
        box-shadow:none;
        border-radius: 2px;
        justify-content: center;
        outline: none;
        width:250px;
        background: #eef3f8;
        padding: 0 8px 0 40px;
        line-height: 1.75;
        font-weight: 400;
        font-size: 14px;
        height:34px;
        border-color: #dce6f1;
    }
}
`;

const SearchIcon=styled.div`
    width:40px;
    pointer-events: none;
    display: flex;
    justify-content: center;
    padding-left: 8px;
`;

const Nav=styled.div`
margin-left:auto;
display: flex;
align-items: center;
@media(max-width:768px)
{
   position: fixed;
   bottom: 0;
   left:0;
   background: white;
   width:100%;
}
`;

const NavListWrap=styled.ul`
display: flex;
flex-wrap:none;
list-style: none;
.active{
    
}

`;
const NavList=styled.li`
display: flex;
align-items: center;
a{
    align-items: center;
    background: transparent;
    display:flex;
    flex-direction: column;
    font-size:12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span{
        color:rgba(0,0,0,0.6);
        display: flex;
        align-items: center;
    }
    @media (max-width:768px)
    {
        min-width: 70px;

    }
}
&:hover,&:active{
    a{
        span{
            color:rgba(0,0,0,0.9);
        }
    }
}
`;

const SignOut=styled.div`
position:absolute;
top:50px;
background: white;
width:100px;
display:flex;
text-align:center;
border-radius: 0 0 5px 5px;
transition-duration:167ms;

display:none;
a{
    font-size: 16px;
}
`;
const User=styled(NavList)`
font-size: 16px;
 a{
     img{
         height:24px;
         width:24px;
         border-radius: 50%;
         z-index:1;
     }
 }
 &:hover{
     ${SignOut}{
         align-items: center;
         display: flex;
         justify-content: center;
     }
 }
`;

const Work=styled(User)`
  
`;

const mapStateToProps=(state)=>{
    return {
        user:state.userState.user
    }
}
export default connect(mapStateToProps) (Header);


