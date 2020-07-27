import React from "react"

import styled from "styled-components"

import { graphql } from "gatsby"

import PageModel from "../components/PageModel"
import PageTitle from "../components/Title"
import ProductList from "../components/Products/ProductList"

const Moisturizers = ({ data }) => {
  return (
    <PageModel title="Moisturizers & SPF">
      <MoisturizersWrapper>
        <PageTitle title="Moisturizers & SPF" />
        <p className="description">
          Whether concerned about slowing the look of aging, keeping skin
          properly hydrated or protecting it from UV exposure,{` `}
          <span className="bold">
            we have a moisturizer for every skin type - and every season.
          </span>
        </p>
        <ProductList products={data.products} />
      </MoisturizersWrapper>
    </PageModel>
  )
}
const MoisturizersWrapper = styled.div`
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
      filter: { category: { eq: "moisturizers & spf" } }
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
            fixed(cropFocus: CENTER, quality: 100) {
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
export default Moisturizers
