
import React from "react";
import styled from 'styled-components'
import Logo from '../logo/Spotify.jpeg';
import { FaHome, FaSearch, FaListUl } from 'react-icons/fa';


const BodySid = styled.div`
position:absolute;
position:fixed;
background-color: black;
color:white;
width: 250px;
height:100vh;
border: 1px solid black;
@media (max-width: 768px) {
    display:none;
    position:none;
    
  }
`
const LogoImg = styled.div`
display:flex;
justify-content:center;
margin-top:16px;
overflow:hidden;
`
const Menu = styled.div`
display:flex;
justify-content:start;
li {
  font-size:20px;
  margin:16px;
  list-style:none;
  
}
`
const Pass = styled.div`
border-radius:2px;
border: 1px solid #333;
width:180px;
`


function template() {
  return (
    <div >
      <BodySid>
        <LogoImg>
          <img src={Logo} alt='Spotify.jpeg' width='200px' height='60' />
        </LogoImg>
        <br/>
        <Menu>
        <ul>
          <li><FaHome /> Home</li>
          <Pass></Pass>
          <li><FaSearch/> Search</li>
          <Pass></Pass>
          <li><FaListUl/> Your Library</li>
        </ul>
      
        </Menu>

      </BodySid>
    </div>
  );
};

export default template;
