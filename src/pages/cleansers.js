import React from "react"

import styled from "styled-components"

import { graphql } from "gatsby"

import PageModel from "../components/PageModel"
import ProductList from "../components/Products/ProductList"

const Cleansers = ({ data }) => {
  return (
    <PageModel title="Cleansers">
      <CleansersWrapper>
        <h1>Cleansers</h1>
        <p className="description">
          Whether skin is dry, normal, oily or in between,{" "}
          <span className="bold">
            Michele Corley Clinical Skin Care has a cleanser for{" "}
            <em className="bold">every</em> type.{" "}
          </span>
          Our cleansers are gentle enough for the most sensitive or Rosacea
          prone skin, and relieve congestion by keeping skin flawlessly clean.
        </p>
        <ProductList products={data.products} />
      </CleansersWrapper>
    </PageModel>
  )
}
const CleansersWrapper = styled.div`
  & {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-inline-start: 1.3rem;
    margin-inline-end: 1.3rem;
    margin-bottom: 1rem;
  }
  & p.description {
    text-align: left;
  }
`

export const query = graphql`
  {
    products: allContentfulMccProduct(
      filter: { category: { eq: "cleanser" } }
      sort: { order: [DESC, ASC], fields: [featured, name] }
    ) {
      edges {
        node {
          contentful_id
          name
          skinType
          description {
            description
          }
          imgRetail {
            id
            description
            fixed(cropFocus: CENTER, width: 177, height: 250, quality: 100) {
              ...GatsbyContentfulFixed
            }
          }
          video
          keyIngredients {
            id
            name {
              formatted
            }
            benefit
          }
        }
      }
    }
  }
`
export default Cleansers
