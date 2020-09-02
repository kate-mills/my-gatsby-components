import React from 'react'
import {graphql} from 'gatsby'
import Image from 'gatsby-image'
import styles from './product-template.module.css'
import PageModel from "../components/PageModel"
import ProductPlayer from '../components/Products/ProductPlayer'

const Product = ({data: {product}}) => {
  return(
    <PageModel title={product.name} description={product.description.description}>
      <section className={styles.single__product}>
        <div className={styles.singlep__col}>

        <h1>{product.name}</h1>
          <h2 className={styles.singlep__skintypes} style={{whiteSpace: "break-spaces", width: "100%", textAlign: "center"}}> {product.skinType.map((item, index) => { return ( <span key={index} className={styles.skintype}>{item}</span>) })} </h2>

          <h3 className={styles.singlep__category}>{product.category}</h3>

        </div>
        <p>{product.description.description}</p>
        <div className={styles.singlep__media}>
            <Image 
              fixed={product.imgRetail.fixed}
              objectFit="cover"
              objectPosition="50% 50%"
              title={product.imgRetail.title}
              alt={product.imgRetail.description}
            />
          <ProductPlayer
            uniqueClassName={styles.video__player}
            id={product.video}
            url={`https://vimeo.com/${product.video}`}
          />
        </div>
        <h4>A FEW KEY Ingredients & Benefits:</h4>
        <ul className={styles.singlep__ul} data-bullet-list>
          {
            product.keyIngredients.map((item, index) => {
              return( 
                <li key={index}> <p>
                  <span className={styles.formatted__name}>{item.name.formatted}: </span>
                  {item.benefit}
                </p> </li>
              )
          })
          }

        </ul>

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
      vimeoUrl
      keyIngredients { 
        name{ formatted }
        benefit
      }
      imgRetail {
        id
        title
        description
        fixed(cropFocus: CENTER, height: 300, quality: 100) {
          ...GatsbyContentfulFixed
        }
      }

    }
  }
`
export default Product
