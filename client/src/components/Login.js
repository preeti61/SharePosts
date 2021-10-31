import styled from 'styled-components';
import {connect,useDispatch } from 'react-redux';
import {Redirect} from 'react-router';
import { useEffect } from 'react';
import { SignInApi,signin,signup,RegisterUser } from '../actions/index.js';



const Login=({user,SignUp})=>{
    
 const dispatch = useDispatch();

    return(
       
        <Container>
            {user &&<Redirect to="/home"/>}
            <Nav>
                <a href="/">
                    <img src="/images/login-logo.svg"alt=""/>
                </a>
                
                <Box>
                    <Join signup={SignUp} onClick={()=>{
                        dispatch(signup())}}>
                       Join Now
                    </Join>

                    <SignIn signup={SignUp} onClick={()=>{
                        dispatch(signin())}}>
                       Sign In
                    </SignIn>
                </Box>

            </Nav>

            <Section>
                 <MainImg>
                     <h1>Welcome to your Professional Community</h1>
                     <img src="/images/login-hero.svg" />
                     
                 </MainImg>
                  
                  <Form onSubmit={(e)=>{
                     e.preventDefault();
                     if(SignUp)
                     dispatch(RegisterUser(e.target.elements.email.value,e.target.elements.password.value,e.target.elements.name.value));
                     else
                     dispatch(SignInApi(e.target.elements.email.value,e.target.elements.password.value))
                  }}>

                  <FormType >{SignUp?"Sign Up":"Sign In"}</FormType>

                    {SignUp&&<Input>
                     <input type="text" placeholder="Name" name="name" required={true} />
                     </Input>}


                     <Input>
                     <input type="text" placeholder="Email" name="email" required={true} />
                     </Input>

                     <Input>
                     <input type="text" placeholder="Password" name="password" required={true} />
                     </Input>

                     {SignUp&&<Input>
                     <input type="text" placeholder="Confirm Password" required={true} />
                     </Input>}

                     <Submit >
                         {SignUp?"Sign Up":"Sign In"}
                     </Submit>
                 </Form>
            </Section>

        </Container>
    )
}


const Container=styled.div`
padding:0px`;
const Nav=styled.nav`
max-width:1128px;
margin:auto;
padding:12px 0 16px;
display:flex;
align-items:center;
position:relative;
justify-content:space-between;
flex-wrap:nowrap;

a>*{
    height:34px;
    width: 135px;
}

@media (max-width:768px) {
      padding:0 5px;
    
  }
`;

const Join=styled.div`
 ${({signup})=>!signup&&`font-size: 16px;
 padding:10px 12px;
 text-decoration: none;
 color:rgba(0,0,0,0.6);
 margin-right:12px;
 border-radius: 4px;
 &:hover{
     background: rgba(0,0,0,0.08);
     color:rgba(0,0,0,0.9);
     text-decoration: none;
 }`}

${({signup})=>signup&&`box-shadow: inset 0px 0px 0px 1px #0a66c2 ;
color:#0a66c2;
border-radius: 24px;
transition-duration:500ms;
padding:5px 24px;
font-size:16px;
line-height: 40px;
font-weight: 600;
text-align:center;
background: rgba(0,0,0,0);
&:hover{
    background-color:rgba(112,181,249,0.15);
    }
 `
}
`;

const SignIn=styled.a`
${({signup})=>signup&&`font-size: 16px;
 padding:10px 12px;
 text-decoration: none;
 color:rgba(0,0,0,0.6);
 margin-right:12px;
 border-radius: 4px;
 &:hover{
     background: rgba(0,0,0,0.08);
     color:rgba(0,0,0,0.9);
     text-decoration: none;
 }`}

${({signup})=>!signup&&`box-shadow: inset 0px 0px 0px 1px #0a66c2 ;
color:#0a66c2;
border-radius: 24px;
transition-duration:500ms;
padding:5px 24px;
font-size:16px;
line-height: 40px;
font-weight: 600;
text-align:center;
background: rgba(0,0,0,0);
&:hover{
    background-color:rgba(112,181,249,0.15);
    }
 `}
`;

const Box=styled.div`
display:flex;
justify-content: space-between;
align-items: center;
`;

const Section=styled.section`
display: flex;
min-height: 700px;
padding-bottom: 138px;
padding-top: 40px;
padding:60px 0px;
position:relative;
flex-wrap: wrap;
width:100%;
max-width: 1128px;
margin:auto;
@media(max-width:768px)
{
  margin: auto;
  min-height:0;
}
`;
const MainImg=styled.div`
width:100%;
padding-bottom:0px;
h1{
    width:55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media(max-width:768px)
     {
      text-align:center;
      font-size: 20px;
       width:100%;
       line-height:2;
     }
}
img{
    z-index:-1;
    width:700px;
    position: absolute;
    bottom:-2px;
    right:-150px;
    @media(max-width:768px)
    {
       top:230px;
       width:initial;
       position: initial;
       height: initial;
    }
}

`;

const Form=styled.form`
margin-top:100px;
width:400px;
@media(max-width:768px)
{
    margin:20px;
    text-align:center;
}
`;

const Input=styled.div`
padding:10px;
border:2px solid rgba(0,0,0,0.08);
margin:5px;
border-radius: 20px;
input{
    border:none;
    outline-width: 0;
    background-color:inherit;
    width: 100%;
    font-weight:400;
    color:rgba(0,0,0,0.8);
}
`;
const FormType=styled.div`
color:#0a66c2;
text-align:center;
font-size:40px;
`;
const Submit=styled.button`
margin:5px;
width: 90%;
margin-left:20px;
text-align:center;
padding: 10px;
color:white;
font-weight: 500;
font-size: 16px;
border:none;
border-radius: 20px;
background-color: #0a66c2;
`;
const mapStateToprops=(state)=>{
    return {
        user:state.userState.user,
        SignUp:state.Signup
    };
}

const mapDispatchToProps=(dispatch)=>{
    return {
        SignIn:()=>dispatch(SignInApi())
    };
}
export default connect(mapStateToprops,mapDispatchToProps)(Login)