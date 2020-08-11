import React from 'react'
import {graphql} from 'gatsby'
import Image from 'gatsby-image'
import styles from './product-template.module.css'
import PageModel from "../components/PageModel"


const Product = ({data: {product}}) => {
  return(
    <PageModel title={product.name}>
      <section>
        <div className={styles.singlep__col}>
        <h1>{product.name}</h1>
          <h2 className={styles.singlep__category}>{product.category}</h2>
        </div>
        <p>{product.description.description}</p>
          <Image fluid={product.imgRetail.fluid}/>

        <p>A FEW KEY Ingredients & Benefits:</p>
        Unordered list here.
        <ul data-bullet-list> </ul>

      </section>
    </PageModel>
  )
}

export const query = graphql`
  query GetMccProduct($slug: String){
    product: contentfulMccProduct(slug: {eq: $slug}) {
      name
      category
      skinType
      description{ description }
      video
      keyIngredients { 
        name{ formatted }
        benefit
      }
      imgRetail {
        fluid { ...GatsbyContentfulFluid  }
      }
    }
  }
`
export default Product


/*const categoryMap = { 'cleansers': 'Cleanser', 'toners': 'Toner', 'exfoliants': 'Exfoliant', 'moisturizers & spf': 'Moisturizer & Spf', 'exfoliants': 'Exfoliant', 'masks': 'Mask', }*/

