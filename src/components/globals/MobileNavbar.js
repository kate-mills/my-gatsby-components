import React, { Component, useState } from "react"

import styled from "styled-components"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import links from "../../constants/links"
import { screen } from "../../css/js/media-functions"
import ProfessionalStatus from "../Professionals/Status" 

const MoreItems = props => {
  const [isOpen, setIsOpen] = useState(false)
  const [css, setCss] = useState("hide")

  const clickHandler = () => {
    if (!isOpen) {
      setCss("show")
    } else {
      setCss("hide")
    }
    setIsOpen(!isOpen)
  }
  return (
    <MoreItemsWrapper>
      <button onClick={clickHandler} className={`${css} plus-btn`}>
      <span className="no-event">{props.name}</span>
      </button>
      <nav className={`${css} sub-nav`}>
        <ul className={`${css} sub-ul`}>
        <hr className="hr-50" />
          {props.menu.map((item, id) => {
            return (
              <li key={id} className={`${css} child`}>
                <AniLink fade to={item.path}> {item.text}</AniLink>
              </li>
            )
          })}
        <hr className="hr-50" />
        </ul>
      </nav>
    </MoreItemsWrapper>
  )
}

const MoreItemsWrapper = styled.div`
  & *{font-family: var(--mainFont);}
  & span.no-event{pointer-events: none;outline:none} 
  & button.plus-btn {
    border: none;
    position: sticky;
    font-size: 16px;
    cursor: pointer;
  }
  & button.plus-btn.hide::after { 
    position: relative;
    left: 5px;
    content: "+"; 
  }
  & button.plus-btn.show::after { 
    position: relative;
    left: 5px;
    content: "--"; 
    letter-spacing: -1px; 
  }
  & nav{
    background: #f2f2f2;
    background-image: initial;
    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: rgba(242, 242, 242, 1);
    width: 90vw;
    margin: 0 auto;
  }
  & nav.sub-nav.hide {
    display: none;
  }
`

class MobileNavbar extends Component {
  state = {
    navbarOpen: false,
    css: "hide",
  }

  navbarHandler = () => {
    if (!this.state.navbarOpen) {
      this.setState({ css: "show" })
    } else {
      this.setState({ css: "hide" })
    }
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }
  render() {
    return (
      <div className={`${this.props.className}`}>
        <div>
          <button className={`${this.state.css} navbar-toggler`} onClick={this.navbarHandler}style={{ height: "32px", paddingTop: "15px", width: "50px", }} >MENU</button>
          <div className={`${this.state.css} full-nav`}>
            {links.map((item, id) => {
              if (item.id === "professional"){ 
                return <ProfessionalStatus key={id} className="li" /> 
              }
              else{
                return item.menu.length > 0 ? 
                  (
                    <MoreItems key={id} name={item.text} menu={item.menu} />):(
                    <AniLink key={id} className="li" fade to={item.path}>{item.text}</AniLink>
                  )
                }
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default styled(MobileNavbar)`
  &{ 
    align-items: center !important; 
    display: flex; 
    font-size: 16px;
    justify-content: center; 
    letter-spacing: .5px;
    line-height: 27px;
    margin: 0 auto; 
    text-align: center; 
  }
  & a {
    font-size: 15px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
  }
  & a.li{
    display: block;
  }
  & li.li{ margin: 5px auto;}
  & button.navbar-toggler {
    background:var(--mainWhite);
    border: none; 
    font-size: 17px;
    line-height: 17px;
    cursor: pointer;
    display: block;
    width: 100%;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 8px;
  } 
  & button.navbar-toggler.show{border-bottom: 2px solid var(--poppy);}
  & hr.hr-50:first-child{ margin-bottom: 7px;height: 0px; }
  & hr.hr-50:last-child { margin-top:7px; height: 0px;}
  & ul { margin 0px; }
  & div.full-nav.hide {display: none;}

  ${screen.nav.wide`&{display: none;}`}
`
