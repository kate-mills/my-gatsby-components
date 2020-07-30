import React from "react"
import styled from "styled-components"
import socialLinks from "../constants/social"

import { screen } from "../css/js/media-functions"
import { setFlexContainer } from "../css/js/helper-styles"

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <div className="clear"/>
      <div className="column">
        <div className="lg-text"><h3 style={{color: "#524c4c", fontWeight:"400", lineHeight: "32px", fontSize: "21px", fontFamily: "proxima-nova", textAlign: "center"}}>Follow us on</h3></div>
        <div className="row footer-icons">
          {socialLinks.map((item, index) => {
            return (
              <div className="icon" key={index}>
                <a
                  href={item.url}
                  className={item.class}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={item.style}>
                  {item.icon}
                </a>
              </div>
            )
          })}
        </div>
        <div className="row lg-text phone-email">
          <h3 style={{color: "#524c4c", fontWeight:"400", fontSize: "21px", lineHeight: "32px", fontFamily: "proxima-nova"}}>
            <span className="phone">707.637.4996</span>{` `}<span className="middot">&middot;</span>{` `}
            <span className="email span1">customerservice</span><span className="email span2">@michelecorley.com</span>
          </h3>
        </div>
        <div className="row sm-text">
          <p className="address">
            Michele Corley Company, 3055 Jefferson Street. Suite 3, Napa, CA
            94558
          </p>
        </div>
        <div className="row sm-text">
          <p>All rights reserved. &copy;{new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}

const FooterWrapper = styled(Footer)`
  & {
    padding-top: 10px;
    padding-bottom: 60px;
    text-align: center;
    letter-spacing: 1px;
    white-space: initial;
  }

  & div.row { width: 100%; ${setFlexContainer({})} }

  & div.column, & div.row {
    font-size: 16px;
    line-height: 19px;
    color: #5c5c5c;
    font-weight: 400;
  }

  & div.row.footer-icons {  font-size: 28px; justify-content: space-around;line-height: unset; }
  a.instagram-logo{font-size: 0px;}
  a.instagram-logo img{height: 40px; width: 40px;}

  div.row.sm-text p { padding: 5px; }

  ${screen.phone.phone`
    div.row.footer-icons{flex-direction: column;} .icon{margin: 20px;}
    span.email{display: block;}
    span.email.span1{margin-top: 5px; margin-bottom: 0px;}
    span.email.span2{margin-bottom: 5px; margin-top: 0px;}
  `}
  ${screen.tablet.tablet` div.row.footer-icons{flex-direction: column;} .icon{margin: 20px;} `}

  @media (max-width: 700px){
    .middot{display:none;}
    .div-row{flex-direction: column;flex-wrap: wrap;}
    span.phone{display:block;}
  }
`
export default FooterWrapper
