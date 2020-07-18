import React from "react"

import styled from "styled-components"

import {graphql} from "gatsby"

import PageModel from "../components/PageModel"
import Title from "../components/Title"
import ProductList from "../components/Products/ProductList"

const Cleansers = ({data}) => {
  return (
    <PageModel title="Cleansers">
      <CleansersWrapper>
            <Title title="Cleansers"/> <p className="description">
              Whether skin is dry, normal, oily or in between,{" "}
              <span className="bold">
                Michele Corley Clinical Skin Care has a cleanser for{" "}
                <em>every</em> type.{" "}
              </span>
              Our cleansers are gentle enough for the most sensitive or Rosacea
              prone skin, and relieve congestion by keeping skin flawlessly
              clean.
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
`
export const query = graphql`
  {


 products: allContentfulMccProduct(filter: {category: {eq: "cleanser"}}, sort: {order: [DESC, ASC], fields: [featured, name]}) {
    edges {
      node {
        contentful_id
        category
        slug
        name
        skinType
        description {
          description
        }
        ingredients
        imgRetail {
          id
          description
          fixed(height: 250, cropFocus: CENTER, width: 225, quality: 100) {
              ...GatsbyContentfulFixed
          }
        }
        video
        featured
        keyIngredients {
          id
          name {
            en_US
            formatted
            latin
          }
          benefit
        }
      }
    }
  }
  }
`
export default Cleansers

