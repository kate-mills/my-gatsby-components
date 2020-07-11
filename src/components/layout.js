import React from "react"
import PropTypes from "prop-types"
import "./layout.css"

import OverlayPink from "./OverlayPink"
import {LogoImg} from "./LogoImg"
import MobileNavbar from "./globals/MobileNavbar"
import DesktopNavbar from "./globals/DesktopNavbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <OverlayPink/>
      <div id="main">
        <MobileNavbar/>
        <LogoImg/>
        <DesktopNavbar/>
        <main>{children}</main>
        <Footer/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
