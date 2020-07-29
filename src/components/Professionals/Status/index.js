import React from "react"
import { navigate } from "@reach/router"
import {
  isLoggedIn,
  logout,
} from "../../../utils/auth"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "./status.module.css"

export default () => {
  let details = ""

  if (!isLoggedIn()) {
    details = (
      <p className={styles[`status__text`]}>
        <AniLink
          fade
          to="/app/login"
          className={styles[`professional__status`]}
        >
          <button className={styles[`professionals__login__btn`]}>Professionals Login</button>
        </AniLink>
      </p>
    )
  } else {
    details = (
      <p className={styles[`status__text`]}>
        <AniLink className={styles[`professional__link`]} fade to="/app/articles" >PROFESSIONALS</AniLink>

        <AniLink className={styles[`professional__logout__link`]} fade to="/"
          onClick={event => {
            event.preventDefault()
            logout(() => navigate(`/app/login`))
          }}
        >
          <span style={{fontSize: "10px", fontWeight: "300", color: "var(--mainBlack)", padding: "5px"}}>Logout</span>
        </AniLink>

      </p>
    )
  }

  return <div className={styles.status}>{details}</div>
}
