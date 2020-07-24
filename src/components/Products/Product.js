import React from "react"
import styled from "styled-components"

import { setFont } from "../../css/js/helper-styles"
import ProductMedia from "./ProductImgPlayer"

const Product = ({ product }) => {
  const { name, skinType, description, keyIngredients } = product

  return (
    <ProductWrapper className="single-product page-article">
      <h2 className="product-name">{name}</h2>
      <p className="product-skintypes">
        {skinType.map((item, index) => {
          return (
            <span key={index} className="skintype">
              {item}
            </span>
          )
        })}
      </p>
      <p className="product-description">{description.description}</p>
      <ProductMedia {...product} />
      <div className="product-ingredients">
        <p className="bold">A FEW KEY Ingredients & Benefits:</p>
        <ul>
          {keyIngredients.map(ing => {
            return (
              <li className="key-ingredient" key={ing.id}>
                <p>
                  <span className="name-formatted">{ing.name.formatted}:</span>{" "}
                  <span className="benefit">{ing.benefit}</span>
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </ProductWrapper>
  )
}
const ProductWrapper = styled.article`
  & {
    display: flex;
    flex-flow: column nowrap;
    max-width: 90%;
    margin-left: 30px;
  }
  & .product-name {
    ${setFont({
      size: "30px",
      height: "42px",
      color: "#b30000cc",
      weight: "400",
    })};
    padding: 0;
  }
  & .product-skintypes {
    padding: 5px 0px;
    text-align: left;
  }

  & .product-skintypes .skintype {
    font-style: italic;
    font-weight: 400;
  }
  & .product-skintypes .skintype::after {
    content: ", ";
  }
  & .product-skintypes .skintype:last-child::after {
    content: "";
  }

  & .product-ingredients p.bold {
    margin-top: 20px;
    text-align: left;
  }
  & .product-ingredients ul {
    width: 90%;
    margin: 0 auto;
  }
  & .product-ingredients .name-formatted {
    font-weight: 400;
  }
  & .product-ingredients .benefit {
    padding-left: 6px;
  }
`
export default Product
