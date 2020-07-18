import React from 'react'
import styled from 'styled-components'


const Announcement = ({className}) => {
  return (
    <div className={className}>
      <p className="p"></p>
      <p className="p">707.637.4996 ~ info@michelecorley.com</p>
      <p className="p">x</p>
      <p className="p"></p>
    </div>
  )
}

const WrappedAnnouncement = styled(Announcement)`
& {
  display: flex;
  flex-flow: row nowrap;
  background: var(--mccPink);
  width:100vw;
  justify-content: stretch;
}
& p {
  font-family: "Times New Roman", Times, serif;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  background: var(--mccPink);
  margin: 0 auto;text-align: center;
}

`
export default WrappedAnnouncement
