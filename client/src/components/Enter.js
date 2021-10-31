import React from 'react'
import styled from 'styled-components';
function PostButton(props) {
 
    return (
        <Enter style={{"background": props.disabled?"rgba(0,0,0,0.08)":"#0a66c2"}}>
          Post  
        </Enter>
    )
}


const Enter=styled.button`
     outline:none;
     border:2px solid rgba(0,0,0,0.09);
     padding:10px;
     background: ${(props)=>(props.disabled?'rgba(0,0,0,0.08)':'#0a66c2')
         };
     color:black;
     font-size: 16px;
     border-radius: 20px;
     width:100px;
     margin-top:20px;
     float: right;
     
`;
export default PostButton;
