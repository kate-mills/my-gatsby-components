import React, {Component} from "react"
import styled from 'styled-components'
import {Link} from 'gatsby'
import links from '../../constants/links'
import {screen} from '../../css/js/media-functions'

const MoreItems = (props) => {
  return ( 
    <MoreItemsWrapper>
        {
          props.menu.map((item, id) => {
            return(
              <li 
                 key={id} className={ `sub-li`}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            )
          })
        }
    </MoreItemsWrapper>
  )
}
const MoreItemsWrapper = styled.ul`
& {
  display: flex;
  flex-direction: column;
  flex-wrap: inherit;
  align-self: flex-start;
  width: -webkit-max-content;
  display: none;
}
& li.sub-li {
    height: 0;
    height: auto;
    width: initial;
    padding: 1px;
}
nav ul.main-nav li:hover  & li.sub-li {
    visibility: visible;
    z-index: 1;
    list-style: none;
    background: white;
}
nav ul.main-nav li:hover  & li.sub-li a {
  line-height: 25px;
  font-size: 15px;
  letter-spacing: 1px;
}
`
class  DesktopNavbar extends Component {
  render(){
    return (
      <div className={`${this.props.className}`}>
        <nav>
          <ul className="main-nav">

            {links.map((item,id)=>{ return(
              item.menu.length > 0 ? 

                <li className="parent-li parent-plus" key={id}>
                  <span className="link-text"> {item.text}</span>
                    <MoreItems menu={item.menu}/>
                </li>
                :
                <li key={id} className="parent-li">
                  <Link to={item.path}> {item.text}</Link>
                </li>

              )})}
          </ul>
        </nav>
      </div>
    )
  }
}
export default styled(DesktopNavbar)`
  & {
    background:white !important;
    margin: 0 auto 20px auto;
    width: 100%;
    position: sticky;
    letter-spacing: 1px;
  }
  & nav ul.main-nav {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
  }
  & nav ul.main-nav li.parent-li {
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
    align-items: flex-start;
    justify-content: center;
    list-style: none;
    width: 140px;
    height: 30px;
    margin: 20px 0;
    text-transform: uppercase;
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
    border-top:1px solid white; 
    border-bottom:1px solid white; 
    height: auto;
  }
  & nav ul.main-nav li.parent-li li.sub-li {
    visibility: hidden;
  }
  & nav ul.main-nav li.parent-li:hover ul {
    display: flex;
    height: 0;
  }
  ${screen.phone.phone`&{display:none;}`}
  ${screen.tablet.tablet`& {display:none;}`}
  ${screen.desktop.desktop``}
`
