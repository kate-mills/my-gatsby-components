import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const query = graphql`
  {
    file(relativePath: {eq: "logo-300x220.jpg"}) {
      childImageSharp {
        fixed(width: 256, fit: CONTAIN) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`


export const OptLogo = () => {
  const data = useStaticQuery(query);
  return(
    <Img fixed={data.file.childImageSharp.fixed}
      media="screen"
      alt="Michele Corley Clinical Skincare Logo"
      style={{
        display:'flex',
        backgroundColor: 'rgba(225,100,92,0)',
        justifyContent: 'center',
        margin: '0 auto'
      }}
    />
  )
}
