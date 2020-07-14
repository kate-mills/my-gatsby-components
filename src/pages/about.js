import React from "react"

import styled from "styled-components"
import { Img } from "../constants/imageurls"
import { setColor, setFont } from "../css/js/helper-styles"
import { screen } from "../css/js/media-functions"

import PageModel from "../components/PageModel"

const About = () => {
  return (
    <PageModel title="About">
      <AboutWrapper>
        <div className="flexItem col">
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

        <div className="flexItem col">
          <div className="innerFlexContainer">
            <h2>Meet Michele Corley</h2>
            <img
              src={Img.michele.md}
              alt={Img.michele.alt}
              width="446"
              height="457"
              overflow="hidden"
              crossOrigin=""
            />

            <div className="flexItem">
              <p className="tiny">
                Michele is a licensed esthetician and creative visionary behind
                every Michele Corley Clinical Skincare product. She is deeply
                committed to educating herself first, so she can then be a
                resource to support her clients' success. Her passion and drive
                to create the best possible experience for her clients shines
                through each Michele Corley Clinical Skincare Product and every
                client interaction.
              </p>
              <p className="tiny">
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
    box-sizing: border-box;
    display: flex;
    color: ${setColor.mainText};
    justify-content: center;
    align-items: center;
    max-width: 100%;
    margin: 0 auto;
  
  }
  & img {object-fit:contain;}
  & h1 {
    ${setFont({
      size: "45px",
      height: "54px",
      color: "#222222",
      weight: "300",
    })};
    text-align: left;
  }
  & h2 {
    ${setFont({
      size: "30px",
      height: "42px",
      color: setColor.h2,
      style: "normal",
      weight: "400",
    })};
  text-align: center;
  }
  & h2.italic{
    ${setFont({
      size: "30px",
      height: "42px",
      color: setColor.h2,
      style: "italic",
      weight: "400",
    })}
    text-align: left;
  }
  & .flexItem { box-sizing: border-box; margin: 0 auto; }
  & p.text {
    font-size: 16px;
    line-height: 27px;
  }
  & p.tiny {
    font-size: 15px;
    line-height: 27px;
  }
  & p.text,p.tiny {
    text-align: left;
    font-weight: 300;
  }
  /* Meet Michele Corley */
  .col:nth-child(2) {text-align: center;}

  ${screen.phone.phone`
    & {flex-direction: column; padding: 20px;}
    & img {width: 100%;}
    & .col:nth-child(2) {margin-top: 30px;}
    h1{ padding-top: 10px;}
    p.text, p.tiny {
      margin: 0 auto;
    }
  `}
  ${screen.tablet.tablet`
    & {
      flex-direction: column;
      margin: 0 auto;
    }
    & img {width: 100%;}

    & .col { padding: 15px; }
    & .col:nth-child(1){ flex-direction: column; }
    h2.italic{text-align: left; padding-left: 5%;}

  `}
  ${screen.desktop.desktop`
    & {
      flex-direction: row;
      width: 100%;
      align-items: flex-start;
      justify-content: space-evenly;
    }
    & .col {
      margin: 10px; 
      padding: 20px;
    }
    & .col:nth-child(2) {
    }
  `}
`
export default About
