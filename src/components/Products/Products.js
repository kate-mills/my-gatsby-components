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
          image {
            id
            fluid {
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
