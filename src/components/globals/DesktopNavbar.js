import React, {Component} from "react"

import styled from 'styled-components'
import {Link} from 'gatsby'
import links from '../../constants/links'
import {screen} from '../../css/js/media-functions'


const MoreItems = (props) => {
  return ( 
    <MoreItemsWrapper>
      <ul className="subNavigation">
        {
          props.menu.map((item, id) => {
            return(
              <li 
                 key={id} className={ `hide `}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            )
          })
        }
      </ul>
    </MoreItemsWrapper>
  )
}
const MoreItemsWrapper = styled.div`
& {
  display: inline;
  font-size: 0px;
  line-height; 0px;
}
ul.subNavigation{
  display: flex;
  flex-flow: column wrap;
  align-items: start;
  height: 0px;
}

ul.subNavigation li {
  background: white;
  height: 0px;
}
button {
  outline: none;
  border: 0;
  cursor: pointer;
  padding: 10px;
}
`
class  DesktopNavbar extends Component {
  render(){
    return (
      <div className={`${this.props.className}`}>
        <nav>
          <ul className="navbar-desktop">
            {links.map((item,id)=>{ return(
              <li  key={id}>
                <Link to={item.path}>
                  {item.text}
                </Link>
                {item.menu.length > 0 ? 
                  <MoreItems menu={item.menu}/> : false}
              </li>)})}
          </ul>
        </nav>
      </div>
    )
  }
}
export default styled(DesktopNavbar)`
  & {
    background:white !important;
    width: 70%;
    margin: 0 auto;
    position: sticky;
  }
  button.navbar-toggler {
    border: 0;
    font-size: 15px;
    line-height: 27px;
    color: #5c5c5c;
    font-style: normal;
    font-weight: 400;
    background: transparent;
    outline: none;
    cursor: pointer;
    margin: 0 auto;
    width: 100%;
  }
  ul{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
  li {
    list-style: none;
    width: 120px;
    height: 50px;
    margin: 0;
    z-index: auto;
  }
  li ul li.hide {
    visibility: hidden;
  }
  li:hover ul {
    background: white;
    z-index: 1;
    height: auto;
    border: 1px solid white;
    width: max-content;
    padding: 5px;
  }
  li:hover  ul li.hide {
    visibility: visible;
    background: white;
    width: max-content;
    height: 50px;
    z-index: 2;
  }
  li:hover ul li.hide a {
    font-weight: 400;
  }
  ${screen.phone.phone`
    ul.navbar-desktop {display:none;}
  `}
  ${screen.tablet.tablet`
    ul.navbar-desktop {display:none;}
  `}
  ${screen.desktop.desktop`
    & {background: white;}
  `}
`
