import React from "react"

import styled from "styled-components"

import {graphql} from "gatsby"

import PageModel from "../components/PageModel"
import Title from "../components/Title"
import PreFilteredProducts from "../components/Products/PreFilteredList"


const Toners = ({data}) => {
  return (
    <PageModel title="Toners">
      <TonersWrapper>
        <div className="page-boundary">
          <div className="product-type">
            <Title title="Our" subtitle="toners" />
            <p className="description">
              Our toners provide a <span className="bold"> super-boost to the cleansing process</span> to help clear away congestion and debris while giving the skin a nice drink of <span className="bold">replenishing hydration</span>.
            </p>
          </div>
          <PreFilteredProducts products={data.products} />
        </div>
      </TonersWrapper>
    </PageModel>
  )
}


const TonersWrapper = styled.section`
  & div.page-boundary {
    width: 80%;
    margin: 0 auto;
  }
  & div.product-type {
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;
  }
`

export const query = graphql`
  {

    products: allContentfulMccProduct(
      filter: { category: { eq: "toner" } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          contentful_id
          category
          slug
          name
          skinType
          description
          ingredients
          imgRetail {
            id
            description
            fluid(quality: 90) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          video
          featured
        }
      }
    }
  }

`

export default Toners
