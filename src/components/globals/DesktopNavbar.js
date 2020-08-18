import React, { Component } from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import links from "../../constants/links"
import { screen } from "../../css/js/media-functions"
import ProfessionalStatus from "../Professionals/Status" 

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
    align-self: flex-start;
    width: -webkit-max-content;
    display: none;
    position: absolute;
    z-index: 5;
    opacity: 1;
  }
  nav ul.main-nav li:hover & li.sub-li {
    position: relative;
    right: 20px;
    visibility: visible;
    z-index: 5;
    background: var(--mainWhite);
  }
  nav ul.main-nav li:hover & li.sub-li a {
    position: sticky;
    padding-left: 24px;
    margin-top: 0px;
    z-index: 5;
    background: var(--mainWhite);
  }
`
class DesktopNavbar extends Component {
  render() {
    return (
      <div className={`${this.props.className}`}>
        <nav>
          <ul className="main-nav">
            {links.map((item, id) => {
              if(item.id === "professional"){
                return <li key={id}> <ProfessionalStatus/></li>
              }
              else{
              return item.menu.length > 0 ? (
                <li
                  aria-label={item.label}
                  role="navigation"
                  className="parent-li parent-plus"
                  key={id}
                  style={{padding: "0px 10px 10px 9px", opacity: "1"}}
                >
                  {item.text}
                  <MoreItems label={item.label} menu={item.menu} />
                </li>
              ) : (
                <li key={id} className="parent-li"
                >
                  <AniLink fade to={item.path}
                    style={{ paddingRight: "12px", marginLeft: "15px" }}>
                    {" "}
                    {item.text}
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
export default styled(DesktopNavbar)`
  & {
    position: sticky;
    opacity: 1;
    z-index: 1;
  }
  & ul{
    margin: unset;
  }
  & nav ul.main-nav {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  & nav ul.main-nav li.parent-li {
    border: 3px solid var(--mainWhite);
  }
  & nav ul.main-nav li.sub-li {
    margin: 0;
    white-space: nowrap;
    letter-spacing: 0.5px;
    border-top: 1px solid var(--mainWhite);
    border-right: 1px solid var(--mainWhite);
    border-left: 2px solid var(--mainWhite);
    padding-right: 35px;
  }
  & nav ul.main-nav li.parent-plus:hover li.sub-li {
    visibility: visible;
  }
  & nav ul.main-nav li.parent-li:hover nav {
    display: flex;
    position: absolute;
    top: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center center;
    opacity: 1;
    transition-delay: 500ms;
  }
  & nav ul.main-nav li:hover nav ul{
    position: sticky;
    opacity: 1;
    z-index: 5
  }
  ${screen.nav.narrow`&{display:none;}`}
`
