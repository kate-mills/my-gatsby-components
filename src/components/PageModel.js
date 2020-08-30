import React from "react"

import Layout from "../components/layout"
import PageTitle from "../components/Title"
import SEO from "../components/seo"

const PageModel = ({ title, centeredTitle, defaultTitle, description, children }) => {
  return (
    <Layout>
      <SEO title={title} description={description}/>
      { centeredTitle===true?<PageTitle title={title} center/>:null }
      { defaultTitle===true?<PageTitle title={title} />:null }
      {children}
    </Layout>
  )
}
export default PageModel
