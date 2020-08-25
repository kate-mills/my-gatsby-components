import React from "react"

import styled from "styled-components"

import { graphql } from "gatsby"

import PageModel from "../components/PageModel"
import PageTitle from "../components/Title"
import ProductList from "../components/Products/ProductList"

const Moisturizers = ({ data }) => {
  return (
    <PageModel
      title="Eyes & Lips"
      description={`Accentuate your best features with this trio of results-driven eye and lip treatments that target specific concerns. Skin is resculpted while youthful looking contours and firmness are revived.`}
    >
      <CleansersWrapper>
        <PageTitle title="Eyes & Lips" />
        <p className="description">Accentuate your best features with this trio of results-driven eye and
          lip treatments that target specific concerns.{` `}
          <span className="bold">
            Skin is resculpted while youthful looking contours and firmness are
            revived</span>.
        </p>
        <ProductList products={data.products} />
      </CleansersWrapper>
    </PageModel>
  )
}

const CleansersWrapper = styled.div`
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
      filter: { category: { eq: "eyes & lips" } }
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
            fixed(height: 200) {
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
