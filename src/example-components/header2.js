import { Link } from "gatsby"
import React from "react"
import Image from 'gatsby-image'
import {screen} from '../css/js/media-functions'
import styled from 'styled-components'


const Header = ({className, siteTitle, smallLogo, bigLogo }) => (
  <header  className={className}>
    <div>
      <h1 className="logo smallLogo">
        <Link to="/">
          <Image fixed={smallLogo} alt="Small Logo"/>
        </Link>
      </h1>
    </div>

    <div>
      <h1 className="logo bigLlogo">
        <Link to="/">
          <Image fixed={bigLogo} alt="Big Logo"/>
        </Link>
      </h1>
    </div>

  </header>
)

export default styled(Header)`
&{
  background: #ff645c;
  margin-bottom: 1.45rem;
  display: flex;
  align-items:center;
}
& > div {
  background: rgba(255, 100, 92, 1);
  max-width: 960;
  padding: 1.45rem 1.0875rem;
}
h1.logo{
  margin: 0;
}
div:nth-child(1) h1.logo:first-of-type  img:first-of-type {
  background: honeydew;
  border: 1px solid rgba(255, 100, 92, 1);
  border-radius: 50px;
}
h1.logo:nth-child(2) img {
  border: 10px solid rgba(225, 100, 92, 1);
}
${screen.desktop.desktop`&>div:nth-child(1) {display:none;};& > div:nth-child(2) {display:block;};`}
${screen.tablet.tablet`&>div:nth-child(1) {display:none;};& > div:nth-child(2) {display:block;};`}
${screen.phone.phone`& > div {opacity: 1;};& > div:nth-child(2) {display:none;};`}
`



