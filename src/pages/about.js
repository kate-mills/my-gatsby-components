import React from "react"

import styled from "styled-components"
import { screen } from "../css/js/media-functions"
import PageModel from "../components/PageModel"

import { graphql } from "gatsby"
import Image from 'gatsby-image'

const About = ({data}) => {
  return (
    <PageModel title="About">
      <AboutWrapper>
        <div className="flexItem col" style={{margin: "0 auto" }}>
          <div className="innerFlexContainer">
            <h1>My Philosophy</h1>
            <div className="flexItem innerFlexItem">
              <p className="text">
                is simple, to provide healthy, effective skincare with exemplary
                customer service. I believe in treating my clients' success as
                important as my own, and value a true partnership with everyone
                I have the pleasure to work with.
              </p>
              <p className="text">
                My journey in creating Michele Corley Clinical Skincare began in
                2002 when I wanted to fulfill what I saw as a need in the
                professional skincare industry to offer not only great products,
                but the great service to back them up. So many times busy salon
                owners and estheticians get lost in the shuffle of big corporate
                skincare companies, having to place large opening orders with
                huge minimums, and fighting for good customer service. I wanted
                to change all that, by offering completely affordable premium
                professional skincare with accessible customer service.
              </p>
              <p className="text">
                Each Michele Corley Clinical Skincare product is crafted with
                care and consideration to the health and well being of the skin.
                The ingredients I choose must come from the most natural sources
                available, and their effectiveness proven. I strongly believe
                that you and your clients will love the results you'll see and
                feel from using Michele Corley Clinical Skincare, and enjoy the
                excellence in care you receive.
              </p>
              <p className="text">Many thanks.</p>
              <h2 className="italic"> Michele</h2>
            </div>
          </div>
        </div>

        <div className="flexItem col" style={{margin: "0 auto" }}>
          <div className="innerFlexContainer">
            <h2 >Meet Michele Corley</h2>
            <Image fluid={data.allFile.nodes[0].childImageSharp.fluid} alt="Portrait of Michele Corley in a red floral blouse."/>
            <div className="flexItem">
              <p className="text tiny" style={{ margin: "0 auto", fontSize: "12px", lineHeight: "27px", paddingBlockStart: "10px", paddingBlockEnd: "10px", paddingInlineStart: "15px", paddingInlineEnd: "unset"  }}>
                Michele is a licensed esthetician and creative visionary behind
                every Michele Corley Clinical Skincare product. She is deeply
                committed to educating herself first, so she can then be a
                resource to support her clients' success. Her passion and drive
                to create the best possible experience for her clients shines
                through each Michele Corley Clinical Skincare Product and every
                client interaction.
              </p>
              <p className="text tiny" style={{ margin: "0 auto", fontSize: "12px", lineHeight: "27px", paddingBlockStart: "10px", paddingBlockEnd: "10px", paddingInlineStart: "15px", paddingInlineEnd: "unset"  }}>
                Michele studied with one of the foremost cosmetic chemistry
                authorities in the professional skincare industry, and has
                advanced knowledge of skin aging, acne conditions and rosecea.
              </p>
            </div>
          </div>
        </div>
      </AboutWrapper>
    </PageModel>
  )
}
const AboutWrapper = styled.section`
  &{
    display:flex;
    flex-wrap:nowrap;
    align-items: center;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    line-height: 27px;
    white-space: initial;
  }
  & .flexItem { box-sizing: border-box; white-space:initial;  }
  & h1 {
    text-align: left;
  }
  & h2 { 
   font-style: normal;
   text-align: center;
   margin-top: unset;
   white-space: break-spaces;
  }
  & h2.italic{
    font-style: italic;
    text-align: left;
    padding-inline-start: 10%;
  }
  & p {padding-inline-start: 5px; white-space: initial;}
  & p.text{
    padding-inline-start: 15px;
    padding-inline-end: 20px;
    display:block; 
    padding-block-end: 10px;
    margin: 0 auto;
    text-align: left;
    font-weight: 300;
    color: #5c5c5c; 
    font-size: 16px;
    line-height: 27px;
    white-space: pre-line;
  }
  ${screen.minmax.narrow` & { flex-wrap: wrap; } & img {height: auto;}`}
  ${screen.minmax.wide`
    & {
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: flex-start;
      justify-content: space-evenly;
    }
    & .col:nth-child(1) { padding-right: 30px;}
    & .col:nth-child(2) { padding-left: 30px;}
  `}
`
export const query = graphql`
  {
    allFile(filter: {relativePath: {eq: "Michele_Corley.jpg"}}) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 446) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
export default About
