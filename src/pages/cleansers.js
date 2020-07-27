import React from "react"

import styled from "styled-components"

import { graphql } from "gatsby"

import PageModel from "../components/PageModel"
import PageTitle from "../components/Title"
import ProductList from "../components/Products/ProductList"

const Cleansers = ({ data }) => {
  return (
    <PageModel title="Cleansers">
      <CleansersWrapper>
        <PageTitle title="Cleansers" />
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
    width: 85%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-bottom: 1rem;
    text-align: left;
    box-sizing: border-box;
  }
`

export const query = graphql`
  {
    products: allContentfulMccProduct(
      filter: { category: { eq: "cleansers" } }
      sort: { order: [ASC], fields: [name] }
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
