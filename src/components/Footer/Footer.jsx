import React from "react";
import styled from 'styled-components';
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';


const BodyFoot = styled.div`
position:absolute;
position:fixed;
background-color:rgb(24,24,24);
width:100vw;
bottom:0;
height:90px;
color:rgb(179,179,179);
display:flex;
justify-content:center;
@media (max-width: 768px) {
  display:flex;
    width:100vw;
    height:100px;
  }
`
const Play = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
margin:10px;
width:300px;
height:40px;
`
const PlayMus = styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color:white;
width:40px;
height:40px;
border-radius:50%;
color:black;
font-size:20px;
`

function PlayMusic() {
  
   
  return (
    <>
      <BodyFoot>
       <Play>
          <FaStepBackward />
          <PlayMus>
            <FaPlay />
          </PlayMus>
          <FaStepForward />
        </Play>
      </BodyFoot>
      
    </>
  );
};

export default PlayMusic;
