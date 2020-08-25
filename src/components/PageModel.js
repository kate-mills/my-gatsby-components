import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PageModel = ({ title, description, children }) => {
  return (
    <Layout>
      <SEO title={title} description={description}/>
      {children}
    </Layout>
  )
}
export default PageModel
