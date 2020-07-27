import React from "react"
import styled from "styled-components"
import socialLinks from "../constants/social"

import { screen } from "../css/js/media-functions"
import {
  setFont,
  setFlexContainer,
  setInstagram,
} from "../css/js/helper-styles"

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <div className="column">
        <div className="lg-text">
          <p> Follow us on </p>
        </div>
        <div className="row footer-icons">
          {socialLinks.map((item, index) => {
            return (
              <div className="icon" key={index}>
                <a
                  href={item.url}
                  className={item.class}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={item.style}
                >
                  {item.icon}
                </a>
              </div>
            )
          })}
        </div>
        <div className="row lg-text phone-email">
          <p className="phone" style={{color: "#524c4c"}}>707.637.4996</p>
          &middot;
          <p className="email">info@michelecorley.com</p>
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
    margin: 0px auto;
    margin-top: 30px;
    padding: 10px 0;
    width: 100%;
    text-align: center;
    letter-spacing: 1px;
    border: 1px solid #00000026;
  }

  & div.column {
    margin: 0 auto;
    ${setFlexContainer({ direction: "column" })};
  }

  & div.row {
    width: 80%;
    ${setFlexContainer({})}
  }

  & div.row.footer-icons {
    font-size: 38px;
    justify-content: space-around;
  }

  & a.instagram {
    ${setInstagram()}
  }

  & .phone-email p {
    padding: 0 5px;
  }

  & div.column,
  & div.column > div.row.lg-text.phone-email {
    ${setFont({
      size: "21px",
      height: "25px",
      color: "#524c4c",
      weight: "400",
    })}
  }
  & div.row {
    ${setFont({
      size: "16px",
      height: "19px",
      color: "#5c5c5c",
      weight: "400",
    })}
  }
  div.row.sm-text p {
    margin: 4px;
  }

  ${screen.phone.phone`
      div.row.footer-icons{flex-direction: column;} .icon{margin: 20px;}
`}
  ${screen.tablet.tablet`
      div.row.footer-icons{flex-direction: column;} .icon{margin: 20px;}
`}
`
export default FooterWrapper
