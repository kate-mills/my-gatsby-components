import React from 'react'

const Email = ({subject})=> {
  let fmtSubject = subject.split(' ').join("%20")
  return (
    <a href={`mailto:customerservice@michelecorley.com?subject=${fmtSubject}`}><span className="email-prefix">customerservice</span>@michelecorley.com </a>
  )
}
export default Email
