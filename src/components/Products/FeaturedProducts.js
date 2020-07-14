import React from "react"
import Product from "./Product"
import { graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getProducts = graphql`
  query getFeatured {
    products: allContentfulMccProduct(
      filter: { category: { eq: "cleanser" } }
    ) {
      edges {
        node {
          contentful_id
          category
          slug
          name
          skinType
          description
          image {
            id
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          video
          featured
        }
      }
    }
  }
`

const FeaturedProducts = () => {
  const { products } = useStaticQuery(getProducts)

  return (
    <section className="product">
      <div className="center">
        {products.edges.map(({ node }) => {
          return <Product key={node.contentful_id} product={node} />
        })}
      </div>
      <AniLink fade to="/products" className="btn-primary">
        All Products
      </AniLink>
    </section>
  )
}

export default FeaturedProducts
