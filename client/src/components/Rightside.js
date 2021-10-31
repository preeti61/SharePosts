import styled from 'styled-components'

import React from 'react'

function Rightside() {
    return (
        <Container>
             <FollowCard>
                 <Title>
                     <h2>
                         <span>Add to your Feed</span>
                     </h2>
                     <img src="/images/feed-icon.svg"/>
                 </Title>
                  <Feedlist>
                      <li>
                      <img src="https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs"/>
                          <div>
                              #Linkedin
                              <Button>
                              Follow
                          </Button>
                          </div>
                          
                      </li>

                      <li>
                      <img src="https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs"/>
                          <div>
                              #Video
                              <Button>
                              Follow
                          </Button>
                          </div>
                      </li>
                  </Feedlist>
             </FollowCard>
             <Recommend>
                 View All recommendations
                 
             </Recommend>
        </Container>
    )
}

export default Rightside;

const Container=styled.div`
   grid-area: rightside;
`;

const FollowCard=styled.div`
text-align:center;
border-radius: 5px;
box-shadow: inset 0 0 0 1px rgba(0,0,0,0.15);
background-color: white;
margin-bottom:8px;
border:none;
padding: 12px;
overflow:hidden;
position: relative;
font-size:14px;
`;
const Title=styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  font-size:14px;
  width:100%;
  color:rgba(0,0,0,0.6);
`;

const Feedlist=styled.div`
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align:left;
    line-height: 2;
    padding: 12px;
    margin-top: 12px;
    li{
        display:flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        width:100%;
        margin-bottom: 25px;
        div{
            display: flex;
            flex-direction: column;
            position:absolute;
            left:80px;
        }
        img{
            width:48px;
            height:48px;
        }
    }

`;

const Avatar=styled.div`
 background-image:url('https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs');
 background-position: center;
 background-repeat: no-repeat;
 background-size: contain;
`;

const Button=styled.button`
   max-width:70px;
   border-radius: 15px;
   max-height: 32px;
   padding:16px;
   display: inline-flex;
   align-items: center;
   justify-content: center;
   text-align:center;
   color:rgba(0,0,0,0.6);
   outline: none;
   box-shadow: inset 0 0 0 1px rgba(0,0,0,0.15);
`;

const Recommend=styled(FollowCard)`
text-align:left;
color:#0a66c2;
display:flex;
align-items: center;
`
