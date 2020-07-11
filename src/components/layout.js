import React from "react"
import PropTypes from "prop-types"
import "./layout.css"

import OverlayPink from "./OverlayPink"
import OverlayWhite from "./OverlayWhite"
import {LogoImg} from "./LogoImg"
import MobileNavbar from "./globals/MobileNavbar"
import DesktopNavbar from "./globals/DesktopNavbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <OverlayPink/>
      <OverlayWhite/>
      <div >
        <MobileNavbar/>
        <LogoImg/>
        <DesktopNavbar/>
        <main>{children}</main>
      </div>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
