import React from "react"
import PropTypes from "prop-types"
import "./layout.css"

import OverlayPink from "./OverlayPink"
import { LogoImg } from "./LogoImg"
import Announcement from "./Announcement"
import Status from "./Professionals/Status"
import MobileNavbar from "./globals/MobileNavbar"
import DesktopNavbar from "./globals/DesktopNavbar"

import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <OverlayPink />
      <Announcement />
      <Status />
      <div id="content">
        <MobileNavbar />
        <LogoImg />
        <DesktopNavbar />
        <main>
          {children}
          <Footer />
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
