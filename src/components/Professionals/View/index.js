import React from "react"
import styles from "./view.module.css"
import SEO from "../../../components/seo"


const View = ({ title, children }) => (
  <>
    <SEO title="Professionals"/>
    <section className={styles.view}>
      <h1>MCC Professionals</h1>
      <h2>{title}</h2>
      {children}
    </section>
  </>
)

export default View
