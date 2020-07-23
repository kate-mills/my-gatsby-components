import React from "react"

import styled from "styled-components"

import { graphql } from "gatsby"

import PageModel from "../components/PageModel"
import PageTitle from "../components/Title"
import ProductList from "../components/Products/ProductList"

const Moisturizers = ({ data }) => {
  return (
    <PageModel title="Moisturizers & SPF">
      <CleansersWrapper>
        <PageTitle title="Moisturizers & SPF" />
        <p className="description">
          Whether concerned about slowing the look of aging, keeping skin
          properly hydrated or protecting it from UV exposure,{` `}
          <span className="bold">
            we have a moisturizer for every skin type - and every season.
          </span>
        </p>
        <ProductList products={data.products} />
      </CleansersWrapper>
    </PageModel>
  )
}
const CleansersWrapper = styled.div`
  & {
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-bottom: 1rem;
  }
  & p.description {
    text-align: left;
  }
`

export const query = graphql`
  {
    products: allContentfulMccProduct(
      filter: { category: { eq: "moisturizer" } }
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
            fixed(cropFocus: CENTER, width: 325, quality: 100) {
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
