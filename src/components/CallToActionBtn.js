import React from "react"
import {
  isLoggedIn,
  isAppInPath,
} from "../utils/auth"

import AniLink from "gatsby-plugin-transition-link/AniLink"

export default () => {
  let details = ""

  if (!isLoggedIn() && !isAppInPath()) {
    details = (
      <div>
        <h3
          style={{
            fontWeight: "700",
            fontSize: "21px",
            lineHeight: "32px",
            color: "#524c4c",
            textAlign: "center",
            paddingBottom: "10px"
          }}
        >Licensed Professionals - Are you interested in wholesale?</h3>
        <p style={{marginTop: "25px"}}>
          <AniLink fade to="/app/login" className="btn-white btn" 
            style={{
              fontSize: "15px",
              fontWeight: "600",
            }}
          >LEARN MORE
          </AniLink>
        </p>
      </div>
    )
  } else {
    details = "" 
  }
  return <div style={{
    margin: "30px auto",
    textAlign: "center",
    width: "auto",
  }} className="interested-professionals">{details}</div>
}

