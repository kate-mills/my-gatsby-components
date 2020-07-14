import React from "react"
import styled from "styled-components"

import Product from "./Product"
import Title from "../Title"

import { screen } from "../../css/js/media-functions"
import { graphql, useStaticQuery } from "gatsby"

const ProductList = () => {
  return (
    <ProductListWrapper>
      <Title title="cleansers" subtitle="" />
      <Product title="My Title" subtitle="category" />
    </ProductListWrapper>
  )
}

const ProductListWrapper = styled.section``

export default ProductList
