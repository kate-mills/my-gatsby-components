import React from "react"

const RaveReview = ({id, data:{data}}) => {
  return (
    <div>
      <p style={{fontStyle: "italic", fontWeight: "300", margin: "0", padding: "0", border: "0" }}>"{data.review}"</p>
      <p style={{
          fontWeight: "600",
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
