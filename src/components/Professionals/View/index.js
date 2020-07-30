import React from "react"
import styles from "./view.module.css"

const View = ({ title, children }) => (
  <>
    <section className={styles.view}>
      <h1>{title}</h1>
      {children}
    </section>
  </>
)

View.defaultProps = {
  title: "",
}

export default View
