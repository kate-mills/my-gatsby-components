import React from "react"
import PropTypes from "prop-types"
import "./layout.css"

import OverlayPink from "./OverlayPink"
import OverlayWhite from "./OverlayWhite"
import {LogoImg} from "./LogoImg"
import DesktopNavbar from "./globals/DesktopNavbar"


const Layout = ({ children }) => {
  return (
    <>
      <OverlayPink/>
      <OverlayWhite/>
      <div >
        <LogoImg/>
        <DesktopNavbar/>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
