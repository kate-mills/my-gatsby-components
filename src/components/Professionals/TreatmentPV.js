import React from "react"
import View from "./View"

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
    <View title="Treatment Protocol & Videos">
        <article>
          <div>
            <h2 style={{fontWeight: "400"}}>Product Catalog</h2>
            <p>Includes product names, product descriptions, and full ingredient disclosure. </p>
            <a className="btn btn-white" href={data.wholesale.publicURL} target="_blank" rel="noreferrer" download> Download Product Catalog </a>
          </div>

          <div>
            <h2>Training Manual</h2>
            <p>Complete product details, usage instructions, facial protocols, and recommended home care</p>
            <a className="btn btn-white" href={data.trainingManual.publicURL} target="_blank" rel="noreferrer" download> Download Training Manual</a> 
          </div>
        </article>

        {/* under image of esty */}
        <article>
        <h2>Order Specifics</h2>
        <p>$100 minimum order  (Exception - Best Sellers Travel Size Kit)</p>
        <p> Orders shipped via UPS within 1-3 business days</p>
        <p>MC, Visa, American Express, and Discover are accepted</p>
        </article>
    </View>
  )
}





export default Profile

