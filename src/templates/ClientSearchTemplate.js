import React from "react"
import ClientSearch from "../components/ClientSearch"

const SearchTemplate = props => {
  const { pageContext } = props
  const { productData } = pageContext
  const { allProducts, options } = productData
  console.log('allProducts', allProducts);
  return (
    <div>
      <h1 style={{ color: `white`, marginTop: `3em`, textAlign: `center` }}>
        Product Search
      </h1>
      <div>
        <ClientSearch products={allProducts} engine={options} />
      </div>
    </div>
  )
}

export default SearchTemplate
