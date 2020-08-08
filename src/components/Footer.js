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
          <p style={{margin: "0", padding: "0 0 1.0em"}}>
            <span className="phone">707.637.4996</span>{` `}<span className="middot">&middot;</span>{` `}
              <a href="mailto:customerservice@michelecorley.com?Subject=Hello%20Michele!" target="_top" className="email"> 
              <span className="span1">customerservice</span><span className="email span2">@michelecorley.com </span></a>
          </p>
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

  div.phone-email{
    color: #524c4c; 
    font-weight: 300;
    font-size: 20px;
    margin-top: 10px;
    line-height: 22px; 
  }
  a.email{
    text-decoration: none;
    font-size: 19px;
  }

  div.phone-email p {
    white-space: initial;
  }


  ${screen.phone.phone`
    div.row.footer-icons{flex-direction: column;} .icon{margin: 20px;}
    span.phone{ 
      display:block;
      font-size: 18px; 
      letter-spacing: 1.5px; 
      line-height: 30px;
    }
    a.email{ 
      display:block; 
      font-size: 17px;
      margin-inline-end: 10px;
      margin-inline-start: 10px; 
    }
  `}
  ${screen.tablet.tablet` div.row.footer-icons{flex-direction: column;} .icon{margin: 20px;} `}

  @media (max-width: 700px){
    .middot{display:block; line-height: 8px; color: var(--mainWhite);}
    .div-row{flex-direction: column;flex-wrap: wrap;}
    span.phone{display:block;}
  }
`
export default FooterWrapper
