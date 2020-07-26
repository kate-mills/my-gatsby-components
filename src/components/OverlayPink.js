import React from "react"
import styled from "styled-components"

const OverlayPink = ({ className }) => {
  return <div className={className}
    style={{
      position: "fixed",
      top: "0",
      right: "0",
      zIndex: "-10",
      width: "100vw",
      height: "100vh",
      background: "var(--mccPink)"
    }}
    />
}

/* Cover the bottom of the stack with a pink background */
const OverlayPinkWrapper = styled(OverlayPink)`
  position: fixed;
  z-index: -10;
  width: 100vw;
  height: 100vh;
  background: var(--mccPink);
`
export default OverlayPinkWrapper
