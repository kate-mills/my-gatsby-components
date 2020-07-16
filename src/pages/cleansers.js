import React from "react"

import styled from "styled-components"

import {graphql} from "gatsby"

import PageModel from "../components/PageModel"
import Title from "../components/Title"
import PreFilteredProducts from "../components/Products/PreFilteredList"

const Cleansers = ({data}) => {
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
          <PreFilteredProducts products={data.products} />
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
export const query = graphql`
  {
    products: allContentfulMccProduct(
      filter: { category: { eq: "cleanser" } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          contentful_id
          category
          slug
          name
          skinType
          description {description}
          ingredients
          imgRetail {
            id
            description
            fluid(quality: 90) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          video
          featured
        }
      }
    }
  }
`
export default Cleansers

