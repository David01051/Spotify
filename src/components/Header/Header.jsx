
import React from "react";
import styled from 'styled-components'
import { FaChevronLeft,FaChevronRight } from 'react-icons/fa';


const BodyHead = styled.div`
position:fixed;
background-color:rgb(16,16,16);
width:83vw;
margin-left:250px;
height:70px;
display:flex;
justify-content:space-between;
align-items:center;
@media (max-width: 768px) {
  display:flex;
  width:100vw;
  margin-left:0;
    

  }
`
const Buttons =styled.div`
display:flex;
justify-content:space-around;
margin-right:40px;
width:250px;
`
const LogBut =styled.button`
width:110px;
height:35px;
background-color:rgb(179,179,179);
border-radius:18px;
border: none;

`
const SingBut =styled.button`
width:110px;
height:35px;
background-color:black;
color:white;
border:1px solid black;
border-radius:18px;
/* border: none; */
`
const ButtonMoveRout = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
width:120px;
height: 60px;
`
const ButtonMoveLeft = styled.button`
display:flex;
justify-content:center;
align-items:center;
background-color:black;
color:white;
font-size:16px;
width:35px;
height:35px;
border-radius:50%;
border: none;
`
const ButtonMoveRight = styled.button`
display:flex;
justify-content:center;
align-items:center;
background-color:black;
color:white;
font-size:16px;
width:35px;
height:35px;
border-radius:50%;
border: none;
`

function template() {



  return (
    <>
      <BodyHead>
        <ButtonMoveRout>
          
          <ButtonMoveLeft type="button" onClick="">
            <FaChevronLeft/></ButtonMoveLeft>
        
          <ButtonMoveRight type="button" onClick="">
            <FaChevronRight/></ButtonMoveRight>
        </ButtonMoveRout>
     
      <Buttons>
       <SingBut>SING UP</SingBut> 
     <LogBut>LOG IN</LogBut>    
     </Buttons>

      </BodyHead>
      
    </>
  );
};

export default template;
