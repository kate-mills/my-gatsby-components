import React from "react"
import styled from "styled-components"

import { setFont } from "../../css/js/helper-styles"
import { screen } from "../../css/js/media-functions"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Product = ({ product }) => {
  const {
    category,
    slug,
    name,
    skinType,
    description,
    imgRetail,
    ingredients,
  } = product
  return (
    <ProductWrapper>
      <h2 className="mcc-h2">{name}</h2>
      <p>
        {skinType.map((type, index) => {
          return (
            <span key={index} className="skintype">
              {type}
            </span>
          )
        })}
      </p>
      <p>{description}</p>
      <div className="img-container">
        <Image
          objectFit="contain"
          fluid={imgRetail.fluid}
          className="img"
          alt={imgRetail.description}
        />
        <AniLink fade className="link" to={`/${category}/${slug}`}>
          watch video
        </AniLink>
      </div>
      <p className="bold">A FEW KEY Ingredients & Benefits:</p>
      <ul>
        {ingredients.map((ing, index) => {
          return (
            <p key={index}>
              <li className="ingredient">{ing}</li>
            </p>
          )
        })}
      </ul>
    </ProductWrapper>
  )
}

const ProductWrapper = styled.article`
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
    width: 100%;
    margin: 10px auto;
  }

  ul li {
    margin: 2px;
    font-weight: 300;
  }

  & h2.mcc-h2 {
    ${setFont({
      size: "30px",
      height: "42px",
      color: "#b30000cc",
      weight: "400",
    })};
    padding: 0;
  }
  & span.skintype {
    font-style: italic;
  }
  & span.skintype::after {
    content: ", ";
  }
  & span.skintype:last-child::after {
    content: "";
  }
  .bold {
    font-weight: 600;
  }

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
.link {
  padding: 0 0;
  top:100%; 
  color: var(--mainBlack);
  opacity: 1; 
  border:none;
}
`}
`
export default Product
