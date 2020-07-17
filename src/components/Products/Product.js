import React from "react"
import styled from "styled-components"

import { setFont } from "../../css/js/helper-styles"
import { screen } from "../../css/js/media-functions"
import ProductMedia from './ProduductMedia'

const Product = ({ product }) => {
  const {
    name,
    skinType,
    description,
    keyIngredients,
  } = product

  return (
    <ProductWrapper>
      <h2 className="mcc-h2">{name}</h2>
      <p className="product">
        {skinType.map((item, index) => {
          return (
            <span key={index} className="skintype">{item}</span>
          )
        })}
      </p>
      <p>{description.description}</p>
        <ProductMedia {...product}/>

      <p className="bold">A FEW KEY Ingredients & Benefits:</p>
      <ul>
        {keyIngredients.map((ing) => {
          return (
            <p key={ing.id}>
              <li className="key-ingredient">
                <span className="name-en_US">{ing.name.en_US}</span>
                (<span className="name-latin">{ing.name.latin}</span>);
                <span className="benefit">{ing.benefit}</span>
              </li>
            </p>
          )
        })}
      </ul>
    </ProductWrapper>
  )
}

const ProductWrapper = styled.article`
div.flex-container{
dixplay: flex;
flex-flow: row wrap;
}

  .product {
    box-shadow: var(--lightShadow);
    transition: var(--mainTransition);
  }
  .product:hover {
    box-shadow: var(--darkShadow);
  }

  .img-container {
    position: relative;
    background: var(--primaryColor);
    transition: var(--mainTransition);
    margin-bottom: 30px;
  }
  .img {
    transition: var(--mainTransition);
  }
  .img-container:hover .img {
    opacity: 0.3;
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);
    color: var(--mainWhite);
    border: 2px solid var(--mainWhite);
    padding: 0.9rem 1.6rem;
    display: inline-block;
    transition: var(--mainTransition);
    cursor: pointer;
    text-align: center;
  }
  .link:hover {
    background: var(--mainWhite);
    color: var(--primaryColor);
  }
  .img-container:hover .link {
    opacity: 1;
    text-align: center;
  }

  ul {
    width: 90%;
    margin: 10px auto;
  }

  ul li.key-ingredient {
    margin: 5px;
    font-weight: 300;
  }
  span.name-en_US{font-style: normal; margin: 0 5px;}
  span.name-latin{font-style: italic; font-weight: 300;}
  span.benefit { margin-left: 10px;}

  & h2.mcc-h2 {
    ${setFont({ size: "30px", height: "42px", color: "#b30000cc", weight: "400" })};
    padding: 0;
  }

  & span.skintype {font-style: italic;}
  & span.skintype::after {content: ", ";}
  & span.skintype:last-child::after {content: "";} 


  ${screen.phone.phone`
.img-container { background: var(--lightGrey); } 
.img-container:hover .img{ opacity:1; }
.link{
  padding:0 0; 
  width:100%;
  top:100%; 
  color: var(--mainBlack); 
  opacity: 1;
  border:none; 
}
`}

  ${screen.tablet.tablet` 
.img-container { background: var(--lightGrey); } 
.img-container:hover .img{ opacity:1; } 
.img-container .link {
  padding: 0 10px;
  top:50%; 
  left: 75%;
  color: var(--mainBlack);
  opacity: 1; 
  border:none;
}
`}
`
export default Product
