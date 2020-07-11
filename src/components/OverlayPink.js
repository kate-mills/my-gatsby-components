import React from 'react'
import styled from 'styled-components'
import {screen} from '../css/js/media-functions'


const  OverlayPink = ({className}) => {
  return  (<div className={className} id="overlay-zero"/>
  )
}

/* Cover the bottom of the stack with a pink background */
const OverlayPinkWrapper = styled(OverlayPink)`
  position: absolute; /* Sit on top of the page content */
  display: block; /* to hide use none  */
  width: 100vw; 
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index:-1000;
  background-color: ${(props) => props.backgroundColor? props.backgroundColor: "#ff665e"};

  ${screen.phone.phone`width:100vw;`};
  ${screen.tablet.tablet`width:100vw;`};
  ${screen.desktop.desktop`width:100vw;`};
`
export default OverlayPinkWrapper;

