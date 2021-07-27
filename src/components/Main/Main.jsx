
import React from "react";
import styled from 'styled-components';
import Footer from '../Footer/Footer';
import { FaPlay, FaPause } from 'react-icons/fa';


const BodyMain = styled.div`
display:flex;
flex-direction:column;
flex-wrap:wrap;
margin-left:252px;
width:84vw;
height:190vh;
padding-top:100px;
color:white;
background-image: linear-gradient( rgb(40,40,40),rgb(20,20,20), black);
@media (max-width: 768px) {
  display:flex;
  flex-direction:column;

    width:100vw;
    height:100vh;
    margin-left:0;
   
     
  }
`
const Cards = styled.div`
display:flex;
flex-direction:row;
align-items:center;
margin-left:20px;
width:82vw;
height: 300px;
@media (max-width: 768px){
  display:flex;
  justify-content:start;
  align-items:center;
  
width:100%;
height: 150px;
/* border:1px solid; */
  }
`
const Card = styled.div`
margin-left:20px;
width:210px;
height:260px;
border-radius:8px;
 /* border: 1px solid white;  */
background-color:rgb(15,15,15);
h3, p{
  margin-left:10px;
}
:hover{
  background-color:rgb(25,25,25);
  transition: 0.5s ease-in-out; 
}
@media (max-width: 768px){
  display:flex;
  justify-content:start;
  flex-direction:column;
    width:100px;
    height:130px;
    
    h3{
      display:none;
    }
    p{
      display:none;
      /* display:flex;
      justify-content:center;
      align-items:center; */
    }
    
    
  }
`
const ImgCard = styled.div`
/* display:flex;
justify-content:center;
align-items:center; */
margin:10px;
background-color:gray;
border-radius:4px;
width:190px;
height:160px;
@media (max-width: 768px){
  /* display:flex;
  justify-content:start;
  align-items:center; */
width:80px;
height:100%; 
}
`
const Text = styled.div`
margin-left:20px;
/* border: 1px solid white; */
width:100%;
height:80px;
@media (max-width: 768px){
  
    p{
      display:none;
    }
  }
`
const ButtonImg = styled.div`
display:flex;
justify-content:flex-end;
align-items:flex-end;
width:100%;
height:100%;
@media (max-width: 768px){
    display:none;
  }
`

const PlayButtonImg = styled.button`
display:flex;
justify-content:center;
align-items:center;
width:40px;
height: 40px;
border-radius:50%;
color:white;
background-color:rgb(30,215,96);
border:none;
/* border:1px solid white; */
`





function template() {
  return (
    <>
      <BodyMain>
        <Text >
          <h2>Made for ....</h2>
          <p>Get better recommendations the more you listen.</p>
        </Text>

        <Cards>
          <Card>
            <ImgCard>
              <ButtonImg>
                <PlayButtonImg><FaPlay /></PlayButtonImg>
              </ButtonImg>
            </ImgCard>

            <h3>ggg</h3>
            <p>Lorem ipsum dolor sit </p>

          </Card>
          <Card>
            <ImgCard>
              <ButtonImg>
                <PlayButtonImg><FaPlay /></PlayButtonImg>
              </ButtonImg>
            </ImgCard>
            <h3>ggg</h3>
            <p>Lorem ipsum dolor sit </p>
          </Card>

        </Cards>

        <Text >
          <h2>Hip Hop</h2>
          <p>Get better recommendations the more you listen.</p>
        </Text>
        <Cards>
          <Card>
            <ImgCard>
              <ButtonImg>
                <PlayButtonImg><FaPlay /></PlayButtonImg>
              </ButtonImg>
            </ImgCard>
            <h3>ggg</h3>
            <p>Lorem ipsum dolor sit </p>
          </Card>
          <Card>
            <ImgCard>
              <ButtonImg>
                <PlayButtonImg><FaPlay /></PlayButtonImg>
              </ButtonImg>
            </ImgCard>
            <h3>ggg</h3>
            <p>Lorem ipsum dolor sit </p>
          </Card>
          <Card>
            <ImgCard>
              <ButtonImg>
                <PlayButtonImg><FaPlay /></PlayButtonImg>
              </ButtonImg>
            </ImgCard>
            <h3>ggg</h3>
            <p>Lorem ipsum dolor sit </p>
          </Card>

        </Cards>
        <Text >
          <h2>Reggae</h2>
          <p>Get better recommendations the more you listen.</p>
        </Text>

      </BodyMain>

    </>
  );
};

export default template;
