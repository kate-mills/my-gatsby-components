import React from 'react'
import {graphql} from 'gatsby'
import Image from 'gatsby-image'
import styles from './product-template.module.css'
import PageModel from "../components/PageModel"
import ProductPlayer from '../components/Products/ProductPlayer'

const Product = ({data: {product}}) => {
  return(
    <PageModel
      title={product.name}
      description={product.description.description}
      itemScope
      itemType="https://schema.org/Product">
      <section className={styles.single__product}>
        <h1 itemProp="name">{product.name}</h1>
        <h2 className={styles.singlep__skintypes}>
          {product.skinType.map((item, index) => {return (<span key={index} className={styles.skintype}>{item}</span>)})}
        </h2>
        <h3 className={styles.singlep__category} itemProp="category">
          {product.category}
        </h3>
        <div className={styles.flex__justify}>
          <p
            itemProp="description"
            className={styles.description}
          >{product.description.description}
          </p>
        </div>
        <div className={styles.singlep__media}>
          <Image
            className={styles.product__image}
            fixed={product.imgRetail.fixed}
            objectFit="cover"
            objectPosition="50% 50%"
            title={product.imgRetail.title}
            alt={product.imgRetail.description}
          />
          { product.video ? (
          <ProductPlayer
            style={{margin: "0 auto", textAlign: "center"}}
            uniqueClassName={styles.video__player}
            id={product.video}
            url={`https://vimeo.com/${product.video}`}
          />
          ):(<div style={{width: "30%"}}></div>)}
        </div>
        <h4>A FEW KEY Ingredients & Benefits:</h4>
        <ul className={styles.singlep__ul} data-bullet-list>
          {
            product.keyIngredients.map((item, index) => {
              return(
                <li key={index}> <p>
                  <span className={styles.formatted__name}>{item.name.formatted}: </span>
                  {item.benefit}
                </p></li>
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
      award
    }
  }
`
export default Product
