import React from "react"
import Product from "./Product"
import { graphql, useStaticQuery } from "gatsby"

const getProducts = graphql`
  query getFeatured {
    products: allContentfulMccProduct(
      filter: { type: { eq: "cleanser" } }
      sort: {fields: name, order: ASC}
    ) {
      edges {
        node {
          contentful_id
          type
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

const FeaturedProducts = () => {
  const { products } = useStaticQuery(getProducts)

  return (
    <section className="product">
      <div className="center">
        {products.edges.map(({ node }) => {
          return <Product key={node.contentful_id} product={node} />
        })}
      </div>
    </section>
  )
}

export default FeaturedProducts
