import React from "react"

import styled from "styled-components"

import { graphql } from "gatsby"

import PageModel from "../components/PageModel"
import PageTitle from "../components/Title"
import ProductList from "../components/Products/ProductList"

const Toners = ({ data }) => {
  return (
    <PageModel title="Toners">
      <PageWrapper>
        <PageTitle title="Toners" />
        <p className="description">
          Our toners provide a{" "}
          <span className="bold"> super-boost to the cleansing process</span> to
          help clear away congestion and debris while giving the skin a nice
          drink of <span className="bold">replenishing hydration</span>.
        </p>
        <ProductList products={data.products} />
      </PageWrapper>
    </PageModel>
  )
}

const PageWrapper = styled.div`
  & {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-bottom: 1rem;
    text-align: left;
    box-sizing: border-box;
  }
  & p.description{ margin-bottom: 0; padding-bottom: 0; }
`

export const query = graphql`
  {
    products: allContentfulMccProduct(
      filter: { category: { eq: "toners" } }
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

export default Toners
