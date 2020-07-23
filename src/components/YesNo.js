import React from "react"
import styled from "styled-components"
import { screen } from "../css/js/media-functions"

const YesNo = ({ className }) => {
  return (
    <section className={className}>
      <article className="flex-container">
        <ul>
          <h2>YES</h2>
          <li>Powerful Peptides</li>
          <li>Potent Antioxidants</li>
          <li>Stable Vitamin C</li>
          <li>Active Enzymes</li>
          <li>Nutritious Plant Oils</li>
          <li>Balancing Essential Oils</li>
          <li>Vegetarian Formulas</li>
          <li>Gentle Preservatives</li>
        </ul>

        <ul>
          <h2>NO</h2>
          <li>Parabens</li>
          <li>Synthetic Colorants</li>
          <li>Synthetic Fragrance</li>
          <li>Phthalates</li>
          <li>Urea</li>
          <li>
            Formaldehyde Releasing
            <br />
            Preservatives
          </li>
          <li>Sodium Lauryl Sulfate</li>
          <li>Sodium Laureth Sulfate</li>
        </ul>
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
  & .flex-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }
  & ul {
    margin: 0 50px;
    list-style-type:"*  ";
    list-style-position:outside;
  }
  & li{
    color: #5c5c5c;
    font-weight: 300;
    font-size: 15px;
    line-height: 27px;
  }
  & .flex-container  h2 {
    color:rgba(179,0,0,0.8);
    font-size:30px;
    font-weight:400;
    line-height:42px;
    text-align:center;
    width:150px;
  }
  & .flex-column h2.yn {
    font-size: 30px;
    line-height: 42px;
    color: rgba(179, 0,0,0.8);
    font-style:normal;
    font-weight: 400;
    text-align:center;
    padding:17px;
    margin:0 auto;
  }
  & .flex-column h3.yn {
    font-size:21px;
    line-height:32px;
    color: #524c4c;
    font-style:italic;
    font-weight:400;
    text-align:center;
  }
  ${screen.phone.phone`& .flex-container{flex-flow:column nowrap;align-items:center;justify-content:center;}`}
`

export default Wrapper
