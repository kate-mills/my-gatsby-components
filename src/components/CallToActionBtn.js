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
      <div style={{
        padding: "20px",
        whiteSpace: "pre-wrap",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "nowrap",
        width: "100%"
        }}>
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
        <p style={{marginTop: "25px", padding: "unset"}}>
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
    textAlign: "center",
    width: "auto",
  }} className="interested-professionals">{details}</div>
}

