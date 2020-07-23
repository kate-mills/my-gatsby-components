import React from "react"

import styled from "styled-components"

import { graphql } from "gatsby"

import PageModel from "../components/PageModel"
import PageTitle from "../components/Title"
import ProductList from "../components/Products/ProductList"

const Eyes = ({ data }) => {
  return (
    <PageModel title="Eyes & Lips">
      <CleansersWrapper>
        <PageTitle title="Eyes & Lips" />
        <p className="description">
          Accentuate your best features with this trio of results-driven eye and
          lip treatments that target specific concerns.{` `}
          <span className="bold">
            Skin is resculpted while youthful looking contours and firmness are
            revived.
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
      filter: { category: { eq: "eyes" } }
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
export default Eyes
