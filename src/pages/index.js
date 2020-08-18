import React from "react"
import { graphql } from "gatsby"

import PageModel from "../components/PageModel"
import Slider from "../components/Slider/Slider"
import YesNo from "../components/YesNo"
import styled from "styled-components"

const Home = ({data}) => {
  return (
    <PageModel title="Home">
      <Wrapper>
        <h1 style={{textAlign: "center"}}>Beautifully Healthy Skin Starts Here</h1>
        <Slider interval={5000}
          images={data.allFile.nodes}/>
      <YesNo />
      </Wrapper>
    </PageModel>
  )
}

export const query = graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "slideshow/fixed"}}) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 1280, maxHeight: 800, fit: COVER){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
const Wrapper = styled.section`
& picture img{
  border-radius: 20px;
}
`
export default Home
