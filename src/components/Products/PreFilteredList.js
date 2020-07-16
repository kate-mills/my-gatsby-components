import React from "react"
import Product from "./Product"

const PreFilteredList = ({products}) => {

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

export default PreFilteredList
