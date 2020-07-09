/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import {LogoImg} from "./LogoImg"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`

    {
      smallLogo:file(relativePath:{eq:"logo-mcc.png"}){
        childImageSharp{
          fixed(width:100){
            ...GatsbyImageSharpFixed
          }
        }
      }



      bigLogo:file(relativePath:{eq:"logo-300x220.jpg"}){
        childImageSharp{
          fixed(width:200){
            ...GatsbyImageSharpFixed
          }
        }
      }

    }
  `)

  return (
    <>
      <Header smallLogo={data.smallLogo.childImageSharp.fixed} bigLogo={data.bigLogo.childImageSharp.fixed} siteTitle={"MCC"} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <LogoImg/>

        <main>
        {children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
