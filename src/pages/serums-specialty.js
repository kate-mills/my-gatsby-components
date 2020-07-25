import React from "react"

import styled from "styled-components"

import { graphql } from "gatsby"

import PageModel from "../components/PageModel"
import PageTitle from "../components/Title"
import ProductList from "../components/Products/ProductList"

const Serums = ({ data }) => {
  return (
    <PageModel title="Serums & Specialty">
      <SerumsWrapper>
        <PageTitle title="Serums & Specialty" />
        <p className="description">
          Sometimes skin needs an extra dose of nourishment. Our serums, facial
          oils and specialty products provide just that;{" "}
          <span className="bold">
            a correcting, protecting and evening out unbalanced skin.
          </span>{" "}
          They give the skin a strong foundation to be its most beautiful,
          healthy self. Any type of issue,{" "}
          <span className="bold">
            from sun-damage, aging or acne-prone conditions
          </span>{" "}
          don't have a chance against these{" "}
          <span className="bold">powerhouse treatments</span>.
        </p>
        <ProductList products={data.products} />
      </SerumsWrapper>
    </PageModel>
  )
}
const SerumsWrapper = styled.div`
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
      filter: { category: { eq: "serums & specialty" } }
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
          vimeoUrl
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
export default Serums
