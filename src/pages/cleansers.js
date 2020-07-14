import React from "react"

import Title from "../components/Title"
import PageModel from "../components/PageModel"

import FeaturedProducts from "../components/Products/FeaturedProducts"
import styled from "styled-components"

const Cleansers = () => {
  return (
    <PageModel title="Cleansers">
      <CleansersWrapper>
        <Title title="Our" subtitle="cleansers" />
        <p>
          Whether skin is dry, normal, oily or in between, Michele Corley
          Clinical Skin Care has a cleanser for every type. Our cleansers are
          gentle enough for the most sensitive or Rosacea prone skin, and
          relieve congestion by keeping skin flawlessly clean.{" "}
        </p>

        <FeaturedProducts category="Cleansers" />
      </CleansersWrapper>
    </PageModel>
  )
}

const CleansersWrapper = styled.section``

export default Cleansers
