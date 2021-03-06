import React from 'react'
import styled from "styled-components"

const Email = ({subject, color, fontWeight, className})=> {
  let fmtSubject = ""
  if (subject.length > 0)
    fmtSubject = subject.split(' ').join("%20")

  return (
    <a className={className}
      href={`mailto:customerservice@michelecorley.com?subject=${fmtSubject}`}>
      <span className="email-prefix">customerservice</span>
      <span className="email-suffix">@michelecorley.com</span>
    </a>
  )
}

Email.defaultProps = {
  subject: 'General Info'
}

export default styled(Email)`
& {
 color: ${props => props.color ? props.color : "inherit"};
 font-weight: ${props => props.fontWeight || "inherit"};
 text-decoration: none;
}
@media (max-width: 360px){
  & {
    display: block;
    font-size: 17px;
    white-space: pre-wrap;
  }
}
@media(max-width: 395px){
  & > span {
    display: block;
  }
}
`
