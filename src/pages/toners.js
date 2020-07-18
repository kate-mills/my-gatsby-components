import React from "react"

import styled from "styled-components"

import {graphql} from "gatsby"

import PageModel from "../components/PageModel"
import PageTitle from "../components/Title"
import ProductList from "../components/Products/ProductList"


const Toners = ({data}) => {
  return (
    <PageModel title="Toners">
      <PageWrapper>
            <PageTitle title="Toners" />
            <p className="description">
              Our toners provide a <span className="bold"> super-boost to the cleansing process</span> to help clear away congestion and debris while giving the skin a nice drink of <span className="bold">replenishing hydration</span>.
            </p>
            <ProductList products={data.products} />
      </PageWrapper>
    </PageModel>
  )
}

const PageWrapper = styled.div`
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

    products: allContentfulMccProduct(
      filter: { category: { eq: "toner" } }
      sort: {order: [DESC, ASC] fields:[featured,name]}
    ) {
      edges {
        node {
          contentful_id
          name
          skinType
          description{ description }
          imgRetail {
            id
            description
          fixed(cropFocus: CENTER, width: 325, quality: 100) {
              ...GatsbyContentfulFixed
            }
          }
          video
          keyIngredients{
            id
            name{ formatted }
            benefit
          }
        }
      }
    }
  }

`

export default Toners
