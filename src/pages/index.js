import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeadingOne from "../components/HeadingOneOrTwo"
import YesNo from "../components/YesNo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeadingOne text="Beautifully Healthy Skin Starts Here" num={1} />
    <YesNo />
  </Layout>
)

export default IndexPage
