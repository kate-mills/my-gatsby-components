import React from 'react'
import styled from 'styled-components'
import socialLinks from '../constants/social'

import {screen} from '../css/js/media-functions'
import {setFont, setFlexContainer} from '../css/js/helper-styles'


const Footer = ({className}) => {
  return (
    <footer className={className}>
      <div className="footer-heading">Follow us on</div>
      <div className="flex-footer-row">
        {socialLinks.map((item, index) => {
          return (
            <div className="flex-icon"
              key={index}
            >
            <a
              href={item.url}
              className={item.class}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          </div>
          )
        })}
      </div>
      <div className="flex-footer-column">
        <div className="flex-footer-row flex-footer-text phone-email">
          <p className="phone">707.637.4996</p>
          <p className="email">info@michelecorley.com</p>
        </div>
        <div className="flex-footer-row">
          <p className="address">Michele Corley Company,
          3055 Jefferson Street. Suite 3,
          Napa, CA 94558</p>
        </div>
        <div className="flex-footer-row">
          <p>All rights reserved. &copy;{new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}

const FooterWrapper = styled(Footer)`
& {
  margin: 10px auto;
  padding-top: 50px;
  padding-bottom: 80px;
}
& .footer-heading, & .flex-footer-text {text-align: center; ${setFont({size: "21px", height: "32px", color: "#524c4c",weight: "400"})}}

& .flex-footer-row {${setFlexContainer({x: "space-evenly"})};}
& .flex-footer-column {${setFlexContainer({direction: "column"})};}
& .flex-footer-column  .phone-email {width: 40%;}
& .flex-footer-column  p.address {
  ${setFont({size: "16px", height: "26px", color: "#5c5c5c", weight:"400"})}
  text-align: center;margin-bottom: 5px;
}
div.flex-icon{font-size: 38px;}
a.facebook {color: blue;}
a.instagram {color: #F7338C;}
a.youtube {color: red;}

  ${screen.phone.phone`max-width:80%;`}
  ${screen.tablet.tablet`width: 80%;`}
  ${screen.desktop.desktop`max-width: 100%;`}
`
export default FooterWrapper
