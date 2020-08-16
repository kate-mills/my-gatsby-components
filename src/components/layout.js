import React from "react"
import PropTypes from "prop-types"
import "./layout.css"

import { LogoImg } from "./LogoImg"
import Announcement from "./Announcement"
import MobileNavbar from "./globals/MobileNavbar"
import DesktopNavbar from "./globals/DesktopNavbar"
import CallToActionBtn from "./CallToActionBtn"
import ProductSearch  from "./ProductSearch"

import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Announcement />
      <div id="content">
        <main>
        <MobileNavbar />
        <LogoImg />
        <ProductSearch/>
        <DesktopNavbar />
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
