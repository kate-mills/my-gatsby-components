import React from "react"
import PropTypes from "prop-types"
import "./layout.css"

import OverlayPink from "./OverlayPink"
import { LogoImg } from "./LogoImg"
import Announcement from './Announcement'
import MobileNavbar from "./globals/MobileNavbar"
import DesktopNavbar from "./globals/DesktopNavbar"

import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <OverlayPink />
      <div id="content">
        <Announcement/> 
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
