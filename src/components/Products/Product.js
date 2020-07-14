import React from "react"
import styled from "styled-components"

const Product = ({ product }) => {
  console.log("Iam a product", product)
  return (
    <ProductWrapper>
      {product.category}
      {product.name}
    </ProductWrapper>
  )
}

const ProductWrapper = styled.article``

export default Product
