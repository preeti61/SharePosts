import styled  from "styled-components";
import Leftside from "./Leftside";
import Rightside from "./Rightside";
import Mid from "./Mid";
import {Redirect} from 'react-router-dom'
import React,{useEffect} from 'react'
import {connect,useDispatch} from 'react-redux';
import { getAllPost } from "../actions/post";

 function Home({user}) {

    const dispatch = useDispatch();
 useEffect(() => {
    dispatch(getAllPost())
 }, [])
    return (
        <Container>
          {!user&&
            <Redirect to="/"/>}
            <Section>
                <h5><a>Hiring in a Hurry?-</a></h5>
                <p>Find talented pros in record time with Upwork and keep business moving.</p> 
            </Section>
            <Layout>
                <Leftside/>
                <Mid/>
                <Rightside/>
            </Layout>
        </Container>
    )


}


const Container=styled.div`
padding:52px;
max-width:100%;
height: 100%;
`;
const Section=styled.div`
  min-height:25px;
  padding:16px 0;
  text-align:center;
  box-sizing:content-box;
  display: flex;
  justify-content: center;
  text-decoration:underline;
    font-weight: 600;
  h5{
      color:#0a66c2;
  }
  @media (max-width:768px)
  {
      flex-direction: column;
      padding:0 5px;
  }
`;


const Layout=styled.div`
 display:grid;
 grid-template-areas: "leftside mid rightside";
 grid-template-columns: minmax(0,5fr) minmax(0,12fr) minmax(300px,7fr);
 column-gap: 25px;
 row-gap: 25px;
 @media (max-width:768px)
 {
     display:flex;
     flex-direction: column;
     
 }
`;

const mapStateToProps=(state)=>{
    return {user:state.userState.user}
}
export default  connect(mapStateToProps)(Home)
