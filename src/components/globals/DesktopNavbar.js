import React, { Component } from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import links from "../../constants/links"
import { screen } from "../../css/js/media-functions"

const MoreItems = props => {
  return (
    <MoreItemsWrapper>
      <ul>
        {props.menu.map((item, id) => {
          return (
            <li key={id} className={`sub-li`}>
              <AniLink fade to={item.path}>
                {item.text}
              </AniLink>
            </li>
          )
        })}
      </ul>
    </MoreItemsWrapper>
  )
}
const MoreItemsWrapper = styled.nav`
  & {
    display: flex;
    flex-direction: column;
    flex-wrap: inherit;
    align-self: flex-start;
    width: -webkit-max-content;
    display: none;
    color: #111111;
  }
  & ul {
    background: white;
    position: sticky;
  }
  & li.sub-li {
    height: 12px;
    width: initial;
    padding: 1px;
  }
  nav ul.main-nav li:hover & li.sub-li {
    position: sticky;
    visibility: visible;
    z-index: 1;
    list-style: none;
    background: white;
    background-color: hsl(0 0% 5% / 0.12);
    opacity: 1;
  }
  nav ul.main-nav li:hover & li.sub-li a {
    line-height: 15px;
    font-size: 15px;
    letter-spacing: 0.5px;
  }
`
class DesktopNavbar extends Component {
  render() {
    return (
      <div className={`${this.props.className}`}>
        <nav>
          <ul className="main-nav">
            {links.map((item, id) => {
              return item.menu.length > 0 ? (
                <li className="parent-li parent-plus" key={id}>
                  <span className="link-text"> {item.text}</span>
                  <MoreItems menu={item.menu} />
                </li>
              ) : (
                <li key={id} className="parent-li">
                  <AniLink fade to={item.path}>
                    {" "}
                    {item.text}
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
export default styled(DesktopNavbar)`
  & {
    background: white !important;
    width: 100%;
    position: sticky;
    letter-spacing: .5px;
    color: #111111;
  }
  & nav ul.main-nav {
    display: flex;
    flex-flow: row wrap;
    width: 95%;
    margin: 0 auto;
    align-items: center;
  }

  & nav ul.main-nav li.parent-li {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: center;
    list-style: none;
    width: 140px;
    height: 15px;
    margin: 30px auto 0px auto;
    text-transform: uppercase;
    color: #111111;
    font-weight: 400;
  }
  & nav ul.main-nav li.sub-li {
    visibility: hidden;
    margin: 0;
  }
  & nav ul.main-nav li.parent-li.parent-plus:hover {
    cursor: default;
  }
  & nav ul.main-nav li.parent-plus:hover li.sub-li {
    visibility: visible;
    padding: 1px 0;
    height: auto;
  }
  & nav ul.main-nav li.parent-li li.sub-li {
    visibility: hidden;
  }
  & nav ul.main-nav li.parent-li:hover nav {
    display: flex;
    height: 0;
  }
  & nav ul.main-nav li.parent-li:hover nav ul {
    background: white;
  }


  ${screen.phone.phone`&{display:none;}`}
  ${screen.tablet.tablet`& {display:none;}`}
  ${screen.desktop.desktop``}
`
