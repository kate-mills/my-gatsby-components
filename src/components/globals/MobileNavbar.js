import React, { Component, useState } from "react"

import styled from "styled-components"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import links from "../../constants/links"
import { screen } from "../../css/js/media-functions"
import { setFont } from "../../css/js/helper-styles"

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
        {props.name}
      </button>
      <nav className={`${css} sub-nav`}>
        <hr className="hr-50"/>
        <ul className={`${css} sub-ul`}>
          {props.menu.map((item, id) => {
            return (
              <li key={id} className={`${css} sub-item`}>
                <AniLink fade to={item.path}>
                  {item.text}
                </AniLink>
              </li>
            )
          })}
        </ul>
        <hr className="hr-50"/>
      </nav>
    </MoreItemsWrapper>
  )
}

const MoreItemsWrapper = styled.div`
  & button.plus-btn {
    ${setFont({
      size: "15px",
      height: "32px",
      color: "#111111",
      weight: "400",
    })}
    background: none;
    outline: none;
    border: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    width: 100%;
    text-align: center;
  }

  & button.plus-btn::after {
    position: sticky;
    font-size: 18px;
    line-height: 10px;
    color: black;
  }
  & button.plus-btn.hide::after {
    content: "  +";
    font-weight: bold;
  }
  & button.plus-btn.show::after {
    content: "  --";
    font-weight: bold;
    letter-spacing: -1px;
  }

  & nav.show.sub-nav {
    box-sizing: border-box;
    padding-bottom: 10px;
    padding-top: 5px;
  }
  & nav.show.sub-nav li {
  }

  & nav.sub-nav.hide {
    display: none;
  }
  & ul.sub-ul.show li {
    font-size: 14px !important;
    line-height: 28px;
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
            <hr className="hr-80"/>
            MENU
            <hr className="hr-80"/>
          </button>

          <ul className={`${this.state.css} main-ul`}>
            {links.map((item, id) => {
              return item.menu.length > 0 ? (
                <li key={id} className="parent">
                  <MoreItems name={item.text} menu={item.menu} />
                </li>
              ) : (
                <li key={id}>
                  {" "}
                  <AniLink fade to={item.path}>
                    {" "}
                    {item.text}{" "}
                  </AniLink>
                </li>
              )
            })}
          </ul>

        </nav>
      </div>
    )
  }
}

export default styled(MobileNavbar)`
&{
font-size: 16px;
line-height: 27px;
  letter-spacing: 1px;
}
& hr.hr-80{
  height: 2px;
  border: none;
  background: rgba(0, 0, 0, 0.1);
}
& hr.hr-80:first-child{
  width: 80vw;
  margin: 2px auto 20px auto;
}
& hr.hr-80:last-child{
  width: 80vw;
  margin: 20px auto;
}
& hr.hr-50{
  border: none;
  width: 40%;
  background: rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  height: 1px;
}
button.navbar-toggler {width: 100%; border: none; background:none; font-size: 16px;}
& nav.show.main-nav  button.navbar-toggler{ margin-bottom: 0px; outline: none;}
& nav.hide.main-nav  button.navbar-toggler{ margin-bottom: 30px;outline: none;}
& li {list-style: none;}

& button.show.plus-btn:hover{cursor: pointer}
& button.hide.plus-btn:hover{
  cursor: pointer;}
& ul.hide {display: none;}
& ul.show.sub-ul, & ul.show.main-ul {padding: unset;}

  ${screen.phone.phone`
    &{
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  `}
  ${screen.tablet.tablet`
    &{
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  `}
  ${screen.desktop.desktop`&{display: none;} `}
`
