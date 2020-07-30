import React, { Component } from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import links from "../../constants/links"
import { screen } from "../../css/js/media-functions"

const MoreItems = props => {
  return (
    <MoreItemsWrapper role="navigation" aria-label={props.label}>
      {props.text}
      <ul>
        {props.menu.map((item, id) => {
          return (
            <li key={id} className={`sub-li`}>
              <AniLink
                fade
                aria-label={item.text}
                role="navigation"
                to={item.path}
              >
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
    background: var(--mainWhite);
  }
  nav ul.main-nav li:hover & li.sub-li {
    position: sticky;
    visibility: visible;
    z-index: 1;
    list-style: none;
    background: var(--mainWhite);
    opacity: 1;
  }

  nav ul.main-nav li:hover & li.sub-li a {
    color: inherit;
    font-size: 15px;
    letter-spacing: 0.5px;
    margin-top: 0px;
  }
  & a:hover {
    background-color: var(--mccPink);
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
                <li
                  aria-label={item.label}
                  role="navigation"
                  className="parent-li parent-plus"
                  key={id}
                  style={{
                    lineHeight: "20px",
                    padding: "10px",
                    background: "white",
                  }}
                >
                  {item.text}
                  <MoreItems label={item.label} menu={item.menu} />
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
    position: sticky;
    letter-spacing: .5px;
    color: #111111;
  }
  & nav ul.main-nav {
    display: flex;
    flex-flow: row wrap;
    margin: 20px auto;
    justify-content: space-evenly;
    max-width: 80%;
  }
  & li{
    margin-left: 0.75rem;
    margin-top: 0px;
    padding: 0.25rem;
    letter-spacing: 0px;
  }

  & nav ul.main-nav li.parent-li {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    list-style: none;
    width: auto;
    text-transform: uppercase;
    color: #111111;
    font-weight: 400;
  }
  & nav ul.main-nav li.sub-li {
    visibility: hidden;
    margin: 0;
  }
  & nav ul.main-nav li.parent-li.parent-plus:hover {
    cursor: pointer;
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
    border: 3px solid white;
  }
  & nav ul.main-nav li:hover ul{
    position: absolute;
    top: 45px;
  }
  ${screen.nav.mobile`&{display:none;}`}
  ${screen.nav.desktop``}
`
