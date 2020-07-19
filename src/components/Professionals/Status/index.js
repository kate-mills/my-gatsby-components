import React from "react"
import { navigate } from "@reach/router"
import { getCurrentUser, isLoggedIn, logout, isAppInPath } from "../../../utils/auth"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "./status.module.css"

export default () => {
  let details = "";

  if (!isLoggedIn()){
    details = (
      <p className={styles[`status__text`]}>Professionals{` `}<AniLink fade to="/app/login">log in</AniLink>.</p>
    )
  } else {
    const { name, email } = getCurrentUser()
    details = (
      <p className={styles[`status__text`]}>
        {`     `}
        Logged in as {name} ({email}
        )!
        {` `}
        <AniLink
          fade
          to="/"
          onClick={event => {
            event.preventDefault()
            logout(() => navigate(`/app/login`))
          }}
        >
        <span className={styles[`professional__link`]}>Log out</span>
        </AniLink>
        {`  `}
        <span className={styles[`professional__link`]}> {!isAppInPath() ? <AniLink fade to="/app/articles">Professionals</AniLink>:""} </span>

      </p>
      
    )
  }

  return <div className={styles.status}>{details}</div>
}
