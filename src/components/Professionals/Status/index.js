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
        <AniLink
          fade
          to="/app/login"
          className={styles[`professional__status`]}
        >
          <button className={styles[`professionals__login__btn`]}>Professionals Login</button>
        </AniLink>
    )
  } else {
    details = (
      <>
      <AniLink className={styles[`professional__link`]} fade to="/app/treatment-protocol-videos" >
          PROFESSIONALS
      </AniLink>
      <AniLink className={styles[`professional__logout__link`]}
        fade 
        to="/"
        onClick={ event => { 
          event.preventDefault()
          logout(() => navigate(`/app/login`)) 
          }
        }> <span> Logout </span>
      </AniLink>
      </>
    )
  }
  return <span className={styles.status}>{details}</span>
}
