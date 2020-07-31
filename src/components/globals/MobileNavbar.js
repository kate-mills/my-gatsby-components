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
              <li key={id} className={`${css} sub-item`}>
                <AniLink fade to={item.path}>
                  {item.text}
                </AniLink>
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
  & {
    background: var(--mainWhite);
  }
  & span.no-event{
    pointer-events: none;
  } 
  & button.plus-btn {
    align-items: center;
    background: var(--mainWhite);
    border: none;
    letter-spacing: 1px;
    margin: 0 auto;
    outline: none;
    position: sticky;
    text-align: center;
    text-transform: uppercase;
  }
  & button.plus-btn::after {
    padding: 2px 10px 2px 10px;
    font-size: medium;
  }
  & button.plus-btn.hide::after { 
    content: "+"; 
  }
  & button.plus-btn.show::after { content: "--"; letter-spacing: -1px; }

  & nav.show.sub-nav {
    box-sizing: border-box;
  }

  & nav.sub-nav.hide {
    display: none;
  }

  & ul.sub-ul.show li {
    text-align: center;
    list-style: none;
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
        <nav className={`${this.state.css} main-nav`}>
          <button className="navbar-toggler" onClick={this.navbarHandler}>
            MENU
            <hr className="hr-80" />
          </button>

          <ul className={`${this.state.css} main-ul`}>
            {links.map((item, id) => {
              if (item.id === "professional"){
                return <li key={id} className="li parent"> <ProfessionalStatus/></li>
              }
              else{
              return item.menu.length > 0 ? (
                <li key={id} className="li">
                  <MoreItems name={item.text} menu={item.menu} />
                </li>
              ) : (
                <li key={id} className="li">
                  {" "}
                  <AniLink fade to={item.path}>
                    {" "}
                    {item.text}{" "}
                  </AniLink>
                </li>
              )
              }
            })}
          </ul>
        </nav>
      </div>
    )
  }
}

export default styled(MobileNavbar)`
  &{ 
    position: relative;
    bottom: 20px;
    margin: 0 auto; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    text-align: center; 
    font-size: 16px;
    line-height: 27px;
    letter-spacing: 1px;
  }
  & li.li{
    margin: 5px auto;
  }
  & button.show.plus-btn:hover,
  & button.hide.plus-btn:hover,
  & button.navbar-toggler:hover { 
    cursor: pointer; 
  }
  & button.navbar-toggler {
    background:var(--mainWhite);
    border: none; 
    font-size: 16px;
  } 
  & hr.hr-80{ width: 96vw; margin-top: 10px;}
  & ul.sub-ul { 
    max-width: 55%; 
    border: 1px solid rgba(0, 0, 0, 0.1); 
    margin: 0 auto; 
  }
  & hr.hr-50:first-child{ margin-bottom: 2px; }
  & hr.hr-50:last-child { margin-top: 5px; }
  & nav.show.main-nav li.parent:last-child {
    margin-bottom: 30px;
  }
  & ul.hide {display: none;}
  & ul { margin 0px; }

  ${screen.nav.wide`&{display: none;}`}
`
