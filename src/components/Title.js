import React from "react"
import styled from "styled-components"

const Title = ({ className, title }) => {
  return (
    <div className={className}>
      <h1 className="product-category title">{title}</h1>
    </div>
  )
}

export default styled(Title)`
  h1 {
    text-transform: capitalize;
    text-align: left;
    letter-spacing: 1px;
    font-size: 45px;
    line-height: 54px;
    color: var(--mainBlack);
    font-weight: 300;
  }
`
