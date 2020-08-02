import React from "react"
import { graphql } from "gatsby"

import PageModel from "../components/PageModel"
import SlideShow from "../components/SlideShow/SlideShow"
import YesNo from "../components/YesNo"
import styled from "styled-components"

const Home = ({data}) => {

  console.log('DATA->', data);
  return (
    <PageModel title="Home">
      <PressWrapper>
        <h1 style={{textAlign: "center"}}> Beautifully Healthy Skin Starts Here </h1>
        <SlideShow interval={5000}
          images={data.allFile.nodes}/>

      <YesNo />
      </PressWrapper>
    </PageModel>
  )
}

export const query = graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "slideshow/fixed"}}) {
      nodes {
        childImageSharp {
          fluid(maxHeight: 400, fit: CONTAIN, jpegQuality: 100){
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`


const PressWrapper = styled.section`


`

export default Home
