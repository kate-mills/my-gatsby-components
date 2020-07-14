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
      <div className="visible-hr-block"><hr/></div>
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
          <p className="phone">707.637.4996</p>
         <span className="spacer">&macr;</span>
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
  margin: 10px auto;
  padding-top: 50px;
  padding-bottom: 50px;
  width: 80%;
  text-align: center;
  letter-spacing: 1px;
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

& a.instagram{ ${setInstagram()}}

& .phone-email p {padding: 5px;}
.spacer {visibility: visible;height: 18px; width: 20px; color: #bbb}

& div.column,
& div.column > div.row.lg-text.phone-email {
  ${setFont({
    size: "21px",
    height: "32px",
    color: "#524c4c",
    weight: "400"
  })}
  margin: 5px;
  padding: 5px;
}
& div.row{ 
  ${setFont({
  size: "16px",
  height: "26px",
  color: "#5c5c5c",
  weight: "400",
})}
}

${screen.phone.phone`

      .spacer {visibility: hidden;display:block;width: 0px;}
      div.row.footer-icons{flex-direction: column;} .icon{margin: 20px;}
`}
${screen.tablet.tablet`
      div.row.footer-icons{flex-direction: column;} .icon{margin: 20px;}

`}
${screen.desktop.desktop``}
`
export default FooterWrapper
