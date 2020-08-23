import React from "react"

const RaveReview = ({id, data:{data}}) => {
  return (
    <div>
      <p style={{fontStyle: "italic", fontWeight: "300", margin: "0", padding: "0", border: "0", boxSizing: "border-box" }}>"{data.review}"</p>
      <p style={{ boxSizing: "border-box",
          fontWeight: "700",
        letterSpacing: "normal",
        padding: "0",
        border: "0",
        margin: "0" }}>
        <span
          style={{position: "relative", top: "3px"}}
        >&#126;{` `}</span>{data.signature}
      </p>
    </div>
  )
}
export default RaveReview
