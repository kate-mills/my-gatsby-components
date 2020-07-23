import React from "react"

import styled from "styled-components"

import { graphql } from "gatsby"

import PageModel from "../components/PageModel"
import PageTitle from "../components/Title"
import ProductList from "../components/Products/ProductList"

const Exfoliants = ({ data }) => {
  return (
    <PageModel title="Exfoliants">
      <ExfoliantsWrapper>
        <PageTitle title="Exfoliants" />
        <p className="description">
          Our exfoliants help{" "}
          <span className="bold">
            clear away all traces of debris and build up{" "}
          </span>
          on the skin that can lead to fine lines and wrinkles, uneven skin tone
          and clogged pores.
        </p>
        <ProductList products={data.products} />
      </ExfoliantsWrapper>
    </PageModel>
  )
}
const ExfoliantsWrapper = styled.div`
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
      filter: { category: { eq: "exfoliant" } }
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
export default Exfoliants
