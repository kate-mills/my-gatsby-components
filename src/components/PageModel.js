import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PageModel = ({ name, title, children }) => {
  return (
      <Layout>
        <SEO title={title} />
        {children}
      </Layout>
  )
}
export default PageModel
