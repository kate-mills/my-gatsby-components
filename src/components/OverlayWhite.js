import React from 'react'
import styled from 'styled-components'
import {screen} from '../css/js/media-functions'



const  OverlayWhite = ({className, id, zIndex}) => {
  return  (<div className={className} id={id || "overlay"}/>
  )
}


const OverlayWhiteWrapper = styled(OverlayWhite)`
  position: absolute;
  display: block;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -999;
  background-color: #ffffff;
  height: 100vh;
  ${screen.phone.phone`width:100vw;`};
  ${screen.tablet.tablet`width:100vw;`};
  ${screen.desktop.desktop`height: 100vh;width:70vw;`}
`
export default OverlayWhiteWrapper;

