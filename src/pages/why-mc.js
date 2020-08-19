import React from "react"
import { graphql } from "gatsby"
import Image from 'gatsby-image'
import PageModel from "../components/PageModel"
import PageTitle from "../components/Title"
import styled from "styled-components"

const Whymc = ({data:{files:{nodes}}}) => {
  const facialImg = nodes[0]
  return (
    <PageModel title="Why Choose Michele Corley Clinical Skincare?">
      <PageTitle title="Why Choose Michele Corley Clinical Skincare?" align="center" size="30px" weight="400"></PageTitle>
      <WhyWrapper>
        <div className="row">
        <div className="col-left">
          <Image className="mobile-img" fluid={facialImg.childImageSharp.fluid} alt="Woman receiving a relaxing facial." style={{maxWidth: "447px", maxHeight: "352px"}}/>
        <ul data-bullet-list className="why-mc">
          <li><p>Premium, natural, professional skincare</p></li>
          <li><p>Superior results</p></li>
          <li><p>Exemplary customer service</p></li>
          <li><p>Fast delivery</p></li>
          <li><p>Low minimum purchase</p></li>
          <li><p>Retail and back bar</p></li>
          <li><p>Only sold through skincare professionals</p></li>
        </ul>
          <p className="p1">What makes Michele Corley Clinical Skin Care different in a sea of other brands?  Our commitment to you and your success by offering the best possible products for your clients; with the cleanest, most efficacious ingredients and absolute accessibility whenever you need us.  </p>
        </div>
        <div className="col-right">
          <Image className="desktop-img" fluid={facialImg.childImageSharp.fluid} alt="Woman receiving a relaxing facial." style={{maxWidth: "447px", maxHeight: "352px"}}/>
        </div>
          <p className="p2">We stand behind our commitment to outstanding customer service in a big way.  No long wait times for orders, low minimum purchase requirements and the absolute best in product education.</p>
        </div>
      </WhyWrapper>
    </PageModel>
  )
}

export const query = graphql`
  {
    files: allFile(filter: {relativePath: {eq: "facial-treatment.jpg"}}) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 447) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
const WhyWrapper = styled.div`
  & {
    display: flex;
    display-content: center;
    flex-direction: column;
    margin: 0 auto;
  }
  & div.row{
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    width: 100%;
  }
  & ul[data-bullet-list] {
    color: rgb(92,92,92);
    display: block;
    font-style: normal;
    font-size: 15px;
    font-weight: 300;
    line-height: 27px;
    list-style:none;
    margin-block-end: 15px;
    margin-block-start: 0px;
    margin-inline-end: 0px;
    margin-inline-start: 40px;
    margin-left: 40px;
    margin-right: 0px;
    margin-top: 0px;
  }
  & ul[data-bullet-list] li p{
    white-space: pre-wrap;
    padding: 0;
    margin: 7.5px auto;
  }
  & ul[data-bullet-list] li>*:first-child::before{
    display: inline-block;
    margin-left: -40px;
    min-width: 40px;
    text-align: right;
    box-sizing: border-box;
  }
  & p.p1{padding-bottom: 15px}
  & p.p2{
    padding-bottom: 0;
  }

  @media (max-width: 767px){
    & h2{margin: 0 auto;white-space: pre-line; text-align: center;}
    & .col-right{display:none;}
    & .col-left{ width: 100%; }
    & div.mobile-img{ width: 85%; margin: 0 auto;}
    & ul[data-bullet-list] {margin-left: 40px;}
  }
  @media (min-width: 768px){
    & div.mobile-img {display: none;}
    & .col-left, & .col-right{width: 50%;}
  }
`

export default Whymc
