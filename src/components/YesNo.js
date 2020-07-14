import React from "react"
import styled from "styled-components"

const YesNo = ({ className }) => {
  return (
    <section className={className}>
      <div className="">
        <div>
          <div>
            <h2>YES</h2>
          </div>
          <div>
            <ul>
              <li>
                <p>Powerful Peptides</p>
              </li>
              <li>
                <p>Potent Antioxidants</p>
              </li>
              <li>
                <p>Stable Vitamin C</p>
              </li>
              <li>
                <p>Active Enzymes</p>
              </li>
              <li>
                <p>Nutritious Plant Oils</p>
              </li>
              <li>
                <p>Balancing Essential Oils</p>
              </li>
              <li>
                <p>Vegetarian Formulas</p>
              </li>
              <li>
                <p>Gentle Preservatives</p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <h2>NO</h2>
          </div>
          <div>
            <ul>
              <li>
                <p>Parabens</p>
              </li>
              <li>
                <p>Synthetic Colorants</p>
              </li>
              <li>
                <p>Synthetic Fragrance</p>
              </li>
              <li>
                <p>Phthalates</p>
              </li>
              <li>
                <p>Urea</p>
              </li>
              <li>
                <p>
                  Formaldehyde Releasing <span>Preservatives</span>
                </p>
              </li>
              <li>
                <p>Sodium Lauryl Sulfate</p>
              </li>
              <li>
                <p>Sodium Laureth Sulfate</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <article>
        <h2>
          Professional skincare that delivers. Clean, safe, efficacious
          formulas.
        </h2>
        <h3>Only available through your licensed skincare professional.</h3>
      </article>
    </section>
  )
}
const Wrapper = styled(YesNo)`
  & {
    display: flex;
    margin: 0 auto;
  }
`

export default Wrapper
