import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "./header.module.css"

const Header = ({title, msg} ) => (
  <header className={styles.header}>
    <div className={styles[`header__wrap`]}>
  <h1 style={{textAlign:"center", fontSize: "45px"}}>{title}</h1>
      <nav role="main" className={styles[`header__nav`]}>
        <ul style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          <li className={styles[`header__link`]}><AniLink fade to="/app/upcoming-classes" > {`Upcoming Classes`} </AniLink></li>
          <li className={styles[`header__link`]}><AniLink fade to="/app/articles" > {`Articles`} </AniLink></li>
          <li className={styles[`header__link`]}><AniLink fade to="/app/treatment-protocol-videos" > {`Treatment Protocol & Videos`} </AniLink></li>
          <li className={styles[`header__link`]}><AniLink fade to="/app/product-images-and-logos"> Product Images & Logos </AniLink></li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.defaultProps = {
  title: "Michele Corley Professionals"
}

export default Header
