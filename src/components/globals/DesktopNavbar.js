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
  }
  nav ul.main-nav li:hover & li.sub-li {
    position: relative;
    right: 20px;
    visibility: visible;
    z-index: 1;
    background: var(--mainWhite);
  }
  nav ul.main-nav li:hover & li.sub-li a {
    position: sticky;
    padding-left: 24px;
    margin-top: 0px;
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
                  style={{padding: "4px 10px 10px 4px"}}
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
  }
  & nav ul.main-nav {
    display: flex;
    flex-flow: row wrap;
    margin: 20px auto;
    justify-content: space-evenly;
  }
  & li{ margin-left: 1rem; }

  & nav ul.main-nav li.parent-li {
    border: 3px solid var(--mainWhite);
  }
  & nav ul.main-nav li.sub-li {
    margin: 0;
  }
  & nav ul.main-nav li.parent-plus:hover li.sub-li {
    visibility: visible;
    padding: 1px 0;
    height: auto;
  }
  & nav ul.main-nav li.parent-li:hover nav {
    display: flex;
    height: 0;
  }
  & nav ul.main-nav li:hover ul{
    position: absolute;
    top: 40px;
  }
  ${screen.nav.narrow`&{display:none;}`}
`
