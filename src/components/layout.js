import React from "react"
import PropTypes from "prop-types"
import "./layout.css"

import { LogoImg } from "./LogoImg"
import Announcement from "./Announcement"
import Status from "./Professionals/Status"
import MobileNavbar from "./globals/MobileNavbar"
import DesktopNavbar from "./globals/DesktopNavbar"
import CallToActionBtn from "./CallToActionBtn"

import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Announcement />
      <div id="content">
        <Status />
        <MobileNavbar />
        <LogoImg />
        <DesktopNavbar />
        <main>
          {children}
          <CallToActionBtn/>
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
