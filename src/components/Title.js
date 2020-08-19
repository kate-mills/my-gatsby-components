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
  & h1 {
    text-transform: capitalize;
    text-align: ${props => props.align ? props.align : "left"};
    letter-spacing: 1px;
    font-size: ${props => props.size ? props.size : "45px"};
    line-height: 54px;
    color: var(--poppy);
    font-weight:${props => props.weight ? props.weight: "300"};
    width: fit-content;
    padding-left: 0px;
    padding-right: 0px;
    margin-left: unset;
  }
`
