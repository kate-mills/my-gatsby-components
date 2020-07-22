import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import YesNo from "../components/YesNo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{ fontSize: "45px", textAlign: "center", color: "#222222" }}>
      Beautifully Healthy Skin Starts Here
    </h1>
    <YesNo />
  </Layout>
)

export default IndexPage
