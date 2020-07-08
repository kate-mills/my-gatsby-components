import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import {LogoImg} from "./LogoImg"


const Layout = ({ children }) => {
  return (
    <>
      <div >
        <LogoImg/>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with {` `}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
