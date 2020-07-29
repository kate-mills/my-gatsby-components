import React from "react"
import View from "./View"
import Header from "./Header"

import { graphql, useStaticQuery } from "gatsby"


const query = graphql`
 {
    wholesale: file(relativePath: {eq: "WholesaleBrochure.pdf"}) { publicURL }
    trainingManual: file(relativePath: {eq: "ProductProfileGuideBook.pdf"}) { publicURL }

  }
`

const Profile = () => {
  const data =  useStaticQuery(query)
  console.log('data', data)
  return (
    <>
      <View>
      <Header title="Treatment Protocol & Videos" />
      <div>
        <article>
          <h2 style={{fontWeight: "400"}}>Product Catalog</h2>
          <p>Includes product names, product descriptions, and full ingredient disclosure. </p>
          <a className="btn-primary" href={data.wholesale.publicURL} target="_blank" rel="noreferrer" download> Download Product Catalog </a>
        </article>
        <article>
          <h2>Training Manual</h2>
          <p>Complete product details, usage instructions, facial protocols, and recommended home care</p>
          <a className="btn-primary" href={data.trainingManual.publicURL} target="_blank" rel="noreferrer" download> Download Training Manual</a> 
        </article>
      </div>

        {/* under image of esty */}
        <div>
        <article>
        <h2>Order Specifics</h2>
        <p>$100 minimum order  (Exception - Best Sellers Travel Size Kit)</p>
        <p> Orders shipped via UPS within 1-3 business days</p>
        <p>MC, Visa, American Express, and Discover are accepted</p>
        </article>
        </div>
      </View>
    </>
  )
}





export default Profile

