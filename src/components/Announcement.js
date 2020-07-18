import React from 'react'
import styled from 'styled-components'


const Announcement = ({className}) => {
  return (
    <div className={className}>
      <p className="p-1">707.637.4996 ~ info@michelecorley.com</p>
      <p className="p-2"><span>x</span></p>
    </div>
  )
}

const WrappedAnnouncement = styled(Announcement)`

& {
  font-family: helvetica,arial,sans-serif;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  width: 100vw;
  margin: 0;
  padding-bottom: 20px;
  background: var(--mccPink);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 60ppx;
}
& p {text-align: center;margin: 0; }
& p.p-1 {width: 80%;}
& p.p-2 {width: 50px;  display: flex; align-items: center; justify-content: center;
    background: #d9564f; text-align: center; height: 50px;}
`
export default WrappedAnnouncement
