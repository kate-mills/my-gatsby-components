import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PageModel = ({ name, title, children }) => {
  return (
    <div>
      <Layout>
        <SEO title={title} />
        <div id="page">{children}</div>
      </Layout>
    </div>
  )
}
export default PageModel
