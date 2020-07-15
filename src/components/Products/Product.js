import React from "react"
import styled from "styled-components"

import {setFont} from '../../css/js/helper-styles'
import {screen} from '../../css/js/media-functions'
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"


const Product = ({ product }) => {
  const {type, slug, name, skinType, description, image, ingredients} = product
  console.log("Iam a product", product)
  return (
    <ProductWrapper>
      <h2 className="mcc-h2">{name}</h2>
      <p>
          {
            skinType.map((type, index) => {
              return <span key={index} className="skintype">{type}</span>
            })
          }
     </p>
      <p>{description}</p>
    <div className="img-container">
      <Image fluid={image.fluid} className="img" alt={image.title}/>
      <AniLink fade className="link" to={`/${type}/${slug}`} >
        details
      </AniLink>
      <div className="footer">
      </div>
    </div>
      <p>A FEW KEY Ingredients & Benefits:</p>
      <ul>
        {
          ingredients.map((ing, index) => {
            return (
              <p key={index}><li className="ingredient">{ing}</li></p>
            )
          })
        }

      </ul>
    </ProductWrapper>
  )
}

const ProductWrapper = styled.article`
& {
  margin: 0 auto;
  transition: var(--mainTransition);
}
& .image-container:hover {
  box-shadow: var(--darkShadow);
  cursor: pointer;
}
& h2.mcc-h2{
  ${setFont({size: "30px", height: "42px", color:"#b30000cc", weight: "400"})};
  padding: 0;
}

& span.skintype{font-style: italic;}
& span.skintype::after{content: ", "}
& span.skintype:last-child::after{content: "";}

& .img-container {
  position: relative;
  box-shadow: var(--lightShadow);
  background: var(--mccPink);
  transition: var(--mainTransition);
  width: 80%;
  margin: 35px auto;
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
}
.link:hover {
  background: var(--mainWhite);
  color: var(--primaryColor);
}
.img-container:hover .link {opacity: 1;}

ul {width: 90%; margin: 10px auto;}
.footer {
  padding: .3rem;
  text-align: left;
}
ul li {
  margin: 2px;
  font-weight: 300;
}

.footer h3 {
  text-transform: capitalize;
  margin-bottom: 0;
}


${screen.tablet.tablet`
.img-container {width: 100%;}
`}
${screen.phone.phone`
.img-container {width: 100%;}
`}


`

export default Product
