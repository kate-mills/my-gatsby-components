import React from "react"

import Title from "../components/Title"
import PageModel from "../components/PageModel"

import FeaturedProducts from "../components/Products/FeaturedProducts"
import styled from "styled-components"

const Cleansers = () => {
  return (
    <PageModel title="Cleansers">
      <CleansersWrapper>
        <div className="page-boundary">
          <div className="product-type">
            <Title title="Our" subtitle="cleansers" />
            <p className="description">
              Whether skin is dry, normal, oily or in between,{" "}
              <span className="bold">
                Michele Corley Clinical Skin Care has a cleanser for{" "}
                <em>every</em> type.{" "}
              </span>
              Our cleansers are gentle enough for the most sensitive or Rosacea
              prone skin, and relieve congestion by keeping skin flawlessly
              clean.
            </p>
          </div>
          <FeaturedProducts category="Cleansers" />
        </div>
      </CleansersWrapper>
    </PageModel>
  )
}

const CleansersWrapper = styled.section`
  & div.page-boundary {
    width: 80%;
    margin: 0 auto;
  }
  & div.product-type {
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;
  }
`

export default Cleansers
