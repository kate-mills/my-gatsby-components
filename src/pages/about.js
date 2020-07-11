import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import {Img} from '../constants/imageurls'
import {setColor, setFont} from '../css/js/helper-styles'
import {screen} from '../css/js/media-functions'

const About = ({className}) => {
  return (
    <Layout>
      <SEO title="About"/>
    <div className={className}>
      <div className="flexItem col">
        <div className="innerFlexContainer">
          <h1>My Philosophy</h1>
          <div className="flexItem innerFlexItem">
            <p className="text">is simple, to provide healthy, effective skincare with exemplary customer service. I believe in treating my clients' success as important as my own, and value a true partnership with everyone I have the pleasure to work with.
            </p>
            <p className="text">My journey in creating Michele Corley Clinical Skincare began in 2002 when I wanted to fulfill what I saw as a need in the professional skincare industry to offer not only great products, but the great service to back them up. So many times busy salon owners and estheticians get lost in the shuffle of big corporate skincare companies, having to place large opening orders with huge minimums, and fighting for good customer service. I wanted to change all that, by offering completely affordable premium professional skincare with accessible customer service.
            </p>
            <p className="text">Each Michele Corley Clinical Skincare product is crafted with care and consideration to the health and well being of the skin. The ingredients I choose must come from the most natural sources available, and their effectiveness proven. I strongly believe that you and your clients will love the results you'll see and feel from using Michele Corley Clinical Skincare, and enjoy the excellence in care you receive.
            </p>
            <p className="text">Many thanks.</p>
            <h2 className="italic"> Michele</h2>
          </div>
        </div>
      </div>

      <div className="flexItem col">
        <div className="innerFlexContainer">
          <h2>Meet Michele Corley</h2>
          <img 
            src={Img.michele.md}
            alt={Img.michele.alt}
            width="446"
            height="457"
            overflow="hidden"
            crossOrigin=""/>

          <div className="flexItem">
            <p className="tiny">Michele is a licensed esthetician and creative visionary behind every Michele Corley Clinical Skincare product. She is deeply committed to educating herself first, so she can then be a resource to support her clients' success. Her passion and drive to create the best possible experience for her clients shines through each Michele Corley Clinical Skincare Product and every client interaction.</p>
            <p className="tiny">Michele studied with one of the foremost cosmetic chemistry authorities in the professional skincare industry, and has advanced knowledge of skin aging, acne conditions and rosecea.</p>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}
export default styled(About)`
  &{
    box-sizing: border-box;
    background: white;
    display: flex;
    margin: 0 auto;
    max-width: 70vw;
    color: ${setColor.mainText};
  }
  & h1 {
    ${setFont({size:"45px", height: "54px", color: "#222222", weight: "300"})};
    box-sizing: border-box;
    text-align: left;
    padding-left: 15px;
    flex-wrap: wrap;
  }
  & h2 {
    ${setFont({size:"30px", height: "42px", color: setColor.h2, style: "normal", weight: "400"})};
  }
  & h2.italic{
    ${setFont({size:"30px", height: "42px", color: setColor.h2, style: "italic", weight: "400"})}
    text-align: center;
  }
  & img {
    background: white;
    display: block;
    margin: 0 auto;
    object-fit: contain;
  }
  & .flexItem {
    box-sizing: border-box;
    margin: 0 auto;
  }
  & p.text {
    font-size: 15px;
    line-height: 27px;
    font-weight: 300;
  }
  & p.tiny {
    font-size: 13px;
    line-height: 27px;
    font-weight: 300;
  }
  & p.text,p.tiny {
    text-align: left;
    padding:15px;
  }
  /* Meet Michele Corley */
  .col:nth-child(2) {
    margin-top: o auto;
    text-align: center;
  }
  ${screen.phone.phone`
    flex-direction: column;
    max-width: 100vw;
    margin: 0 auto;
    .col {
      max-width: 95vw;
    }
    .col:nth-child(2) {
      margin-top: 30px;
    }
    h1{ padding-top: 10px;}
    p.text, p.tiny {
      max-width: 90vw;
      margin: 0 auto;
      flex-wrap: wrap;
    }
    img{
      width: 256px;
      max-height: 325px;
      }
    h2.italic{text-align: left; padding-left: 12vw;}
  `}
  ${screen.tablet.tablet`
    & {
      flex-direction: row;
      margin: 0 auto;
      max-width: 100vw;
    }
    .col {
      max-width: 45vw;
    }
    .col:nth-child(1){
      flex-direction: column;
    }
    img {
      max-width: 40vw;
      max-height: 278px;
    }
    p.text, p.tiny {
      max-width: 45vw;
    }
    h2.italic{text-align: left; padding-left: 5vw;}

  `}
  ${screen.desktop.desktop`
    & {
      flex-direction: row;
      max-width: 70vw;
    }
    .col {
      max-width: 30vw;
    }
    .col:nth-child(1){
      flex-direction: column;
    }
    img {
      max-width: 30vw;
      max-height: 457px;
    }
    h2.italic{text-align: left; padding-left: 5vw;}

  `}
`

