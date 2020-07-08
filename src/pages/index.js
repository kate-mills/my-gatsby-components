import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {LogoImg} from "../components/LogoImg"
import HeadingOne from "../components/HeadingOneOrTwo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LogoImg/>
    <HeadingOne text="Beautifully Healthy Skin Starts Here" num={1}/>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
