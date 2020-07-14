import React from "react"
import styled from "styled-components"
import { screen } from "../css/js/media-functions"

const OverlayPink = ({ className }) => {
  return <div className={className} id="mcc" />
}

/* Cover the bottom of the stack with a pink background */
const OverlayPinkWrapper = styled(OverlayPink)`
  position: sticky;
  width: 100vw;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -10;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "#ff665e"};

  ${screen.phone.phone`width:100vw;`};
  ${screen.tablet.tablet`width:100vw;`};
  ${screen.desktop.desktop`width:100vw;`};
`
export default OverlayPinkWrapper
