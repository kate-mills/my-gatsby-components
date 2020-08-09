import React from "react"

const RaveReview = ({id, data:{data}}) => {
  return (
    <div  style={{marginBlockEnd: "70px", marginBlockStart: "20px"}}>
      <p style={{fontStyle: "italic", fontWeight: "300", margin: "0 0 27px 0", padding: "0", border: "0", boxSizing: "border-box" }}>"{data.review}"</p>
      <p style={{ boxSizing: "border-box",
          fontWeight: "700",
        letterSpacing: "normal",
        padding: "0",
        border: "0",
        margin: "0" }}>
        <span>&#126;{` `}</span>{data.signature}
      </p>
    </div>
  )
}
export default RaveReview
