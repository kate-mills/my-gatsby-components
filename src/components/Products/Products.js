import React from "react"
import ProductList from "./ProductList"
import { useStaticQuery, graphql } from "gatsby"

const getProducts = graphql`
  query {
    products: allContentfulMccProduct {
      edges {
        node {
          contentful_id
          slug
          name
          skinType
          description
          imgRetail {
            id
            fluid(quality: 100, maxWidth: 1000) {
              src
            }
          }
          video
          featured
        }
      }
    }
  }
`

const Products = () => {
  const { products } = useStaticQuery(getProducts)

  return (
    <div>
      <ProductList products={products} />
    </div>
  )
}

export default Products
