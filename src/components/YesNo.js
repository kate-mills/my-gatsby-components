import React from "react"
import styled from "styled-components"
import { screen } from "../css/js/media-functions"

const YesNo = ({ className }) => {
  return (
    <section className={className}>
      <article className="flex-row">
        <div className="flex-col">
          <h2>YES</h2>
        <ul data-bullet-list>
          <li><p>Powerful Peptides</p></li>
          <li><p>Potent Antioxidants</p></li>
          <li><p>Stable Vitamin C</p></li>
          <li><p>Active Enzymes</p></li>
          <li><p>Nutritious Plant Oils</p></li>
          <li><p>Balancing Essential Oils</p></li>
          <li><p>Vegetarian Formulas</p></li>
          <li><p>Gentle Preservatives</p></li>
        </ul>
        </div>
        <div className="flex-col">
          <h2>NO</h2>
        <ul data-bullet-list>
          <li><p>Parabens</p></li>
          <li><p>Synthetic Colorants</p></li>
          <li><p>Synthetic Fragrance</p></li>
          <li><p>Phthalates</p></li>
          <li><p>
            Formaldehyde Releasing<span style={{margin: "7.5px auto",display:"block",position: "relative", bottom: "5px"}}>Preservatives</span>
          </p></li>
          <li><p>Sodium Lauryl Sulfate</p></li>
          <li><p>Sodium Laureth Sulfate</p></li>
        </ul>
        </div>
      </article>
      <article className="flex-column">
        <h2 className="yn">
          Professional skincare that delivers. Clean, safe, efficacious
          formulas.
        </h2>
        <h3 className="yn">
          Only available through your licensed skincare professional.
        </h3>
      </article>
    </section>
  )
}
const Wrapper = styled(YesNo)`
  & .flex-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
  & .flex-col {
    display: flex;
    flex-direction: column;
    margin-inline-start: 30px;
    margin-inline-end: 30px;
    align-items: center;
  }
  & .flex-column h2.yn { text-align: center; padding: 0px; margin: 0 auto; }
  & .flex-column h3.yn {
    font-size: 21px;
    color: #524c4c;
    font-style: italic;
    font-weight: 400;
    text-align: center;
  }
  & [data-bullet-list] {
    color: rgb(92,92,92);
    display: block;
    font-style: normal;
    font-size: 15px;
    font-weight: 300;
    line-height: 27px;
    list-style:none;
    margin-block-end: 0px;
    margin-block-start: 0px;
    margin-inline-end: 0px;
    margin-inline-start: 40px;
    margin-right: 0px;
    margin-top: 0px;
  }
  & ul[data-bullet-list] li p{  padding: 0; margin: 7.5px auto; }
  & ul[data-bullet-list] li>*:first-child::before{
    display: inline-block;
    margin-left: -40px;
    min-width: 40px;
    text-align: right;
    box-sizing: border-box;
  }
  ${screen.phone.phone`
    & .flex-container{
      flex-flow: column wrap;
      justify-content:center;
    }`
  }
`
export default Wrapper
