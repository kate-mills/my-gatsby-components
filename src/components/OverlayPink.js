import React from "react"
import styled from "styled-components"

const OverlayPink = ({ className }) => {
  return <div className={className} id="mcc" />
}

/* Cover the bottom of the stack with a pink background */
const OverlayPinkWrapper = styled(OverlayPink)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -10;
  background: var(--mccPink);
`
export default OverlayPinkWrapper
