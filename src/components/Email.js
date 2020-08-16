import React from 'react'

const Email = ({subject, color})=> {
  let fmtSubject = subject.split(' ').join("%20")
  let cssColor = color || "inherit"
  return (
    <a
      style={{textDecoration:"none", color: cssColor}}
    href={`mailto:customerservice@michelecorley.com?subject=${fmtSubject}`}><span className="email-prefix">customerservice</span>@michelecorley.com</a>
  )
}
export default Email
