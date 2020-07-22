import React from "react"
import styles from "./view.module.css"

const View = ({ title, children }) => (
  <>
    <section className={styles.view}>{children}</section>
  </>
)

View.defaultProps = {
  title: "",
}

export default View
