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
  position: sticky;
  z-index: auto;
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
  z-index: 1;
}
`
class  DesktopNavbar extends Component {
  render(){
    return (
      <div className={`${this.props.className}`}>
        <nav>
          <ul className="navbar-desktop">
            {links.map((item,id)=>{ return(
                
              item.menu.length > 0 ? 

                <li className="parent-nav" key={id}>
                  <Link to={item.path}> {item.text}</Link>
                    <MoreItems menu={item.menu}/>
                </li>
                :
                <li key={id}>
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
    margin: 0 auto;
    width: 70%;
    position: sticky;
  }
  ul{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
  li {
    list-style: none;
    width: 120px;
    height: 60px;
    margin: 0;
  }
  li ul li.hide {
    visibility: hidden;
  }
  li:hover ul {
    background: white;
    height: auto;
    border: 1px solid white;
    width: max-content;
    padding: 5px;
  }
  li:hover  ul li.hide {
    visibility: visible;
    background: #9e9e9e4a;
    width: max-content;
    height: 30px;
  }
  li:hover ul li.hide a {
    font-weight: 400;
  }
  ${screen.phone.phone`&{display:none;}`}
  ${screen.tablet.tablet`& {display:none;}`}
  ${screen.desktop.desktop``}
`
