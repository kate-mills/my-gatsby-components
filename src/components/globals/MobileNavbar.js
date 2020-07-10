import React, {Component, useState} from "react"

import styled from 'styled-components'
import {Link} from 'gatsby'
import links from '../../constants/links'
import {screen} from '../../css/js/media-functions'


const MoreItems = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [css, setCss] = useState("mobileHide");


  const clickHandler = ()=> {
    if(!isOpen){
      setCss("show");
      } else{
      setCss("mobileHide");
    }
    setIsOpen(!isOpen);
  }
  return ( 
    <MoreItemsWrapper>
      <button 
        onClick={clickHandler}
        className="menu-btn" >+</button>
      <ul className="subNavigation">
        {
          props.menu.map((item, id) => {
            return(
              <li 
                 key={id} className={ `${css} sub-item`}>
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
  position: sticky;
  z-index: auto;
}
ul.subNavigation{
  margin-top: 5px;
  display: flex;
  flex-flow: column no-wrap;
  justify-content: space-around;
}

ul.subNavigation li {
  background: white;
}
& li.show.sub-item {
    background: #ff655d;
    z-index: 1;
    word-wrap: break;
}
button {
  outline: none;
  border: 0;
  padding: 10px;
  cursor: pointer;
}
.mobileHide {
  visibility: none;
}
`

class  MobileNavbar extends Component {
  render(){
    return (
      <div className={`${this.props.className}`}>
        <nav>
          <ul className="navbar-desktop">
            {links.map((item,id)=>{ return(
              <li key={id}>
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
export default styled(MobileNavbar)`
  & {
    background:white !important;
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
    outline: none;
    margin: 0 auto;
  }
  li {
    list-style: none;
    width: 120px;
    height: 50px;
    margin: 0;
  }
  li.show  {
    width: 300px;
  }
  li ul li.mobileHide {
    display: none;
  }
  ${screen.phone.phone`
  ul{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  `}
  ${screen.tablet.tablet`
  ul{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  `}
  ${screen.desktop.desktop`
    ul.navbar-desktop {display:none;}
  `}


`
