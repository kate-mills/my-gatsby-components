import React, {Component, useState} from "react"

import styled from 'styled-components'
import {Link} from 'gatsby'
import links from '../../constants/links'
import {screen} from '../../css/js/media-functions'


const MoreItems = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [css, setCss] = useState("hide");

  const clickHandler = ()=> {
    if(!isOpen){
      setCss("show");
      } else{
      setCss("hide");
    }
    setIsOpen(!isOpen);
  }
  return ( 
    <MoreItemsWrapper>
      <button 
        onClick={clickHandler}
        className="plus-btn" >+</button>
      <nav className={`${css} sub-nav`} >
      <ul className={`${css} sub-ul`}>
        {
          props.menu.map((item, id) => {
            return(
              <li 
                 key={id} className={`${css} sub-item`}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            )
          })
        }
      </ul>
      </nav>
    </MoreItemsWrapper>
  )
}

const MoreItemsWrapper = styled.div`
& {display: inline;}
& button.plus-btn {sticky; height: 0px; width: 0px; outline: none; border: none;}
& nav.show.sub-nav  {background: lightgray; box-sizing: border-box;}
& nav.sub-nav.hide {display: none;}
& ul.sub-ul.show li { text-align: center; list-style: none;}
`


class  MobileNavbar extends Component {
  state = {
    navbarOpen: false,
    css: "hide"
  }

  navbarHandler = () => {

    if(!this.state.navbarOpen){
      this.setState({css: "show"})
      } else{
      this.setState({css: "hide"})
    }
    this.setState({navbarOpen: !this.state.navbarOpen})
  }


  render(){
    return (
      <div className={`${this.props.className}`}>
        <nav  className={`${this.state.css} main-nav`}>
          <button className="navbar-toggler" onClick={this.navbarHandler} > MENU </button>

          <ul  className={`${this.state.css} main-ul`}>
            {links.map((item,id)=>{ return(

              item.menu.length > 0 ? 
                <li key={id} className="parent"><Link to={item.path}>{item.text}</Link><MoreItems menu={item.menu}/></li>
                : 
                <li key={id}> <Link to={item.path}> {item.text} </Link></li>
            )})}
          </ul>
        </nav>
      </div>
    )
  }
}

export default styled(MobileNavbar)`

button.navbar-toggler {width: 100%; border: none;}
& nav.show.main-nav  button.navbar-toggler{ margin-bottom: 0px; outline: none;}
& nav.hide.main-nav  button.navbar-toggler{ margin-bottom: 30px;outline: none;}
& li {list-style: none;}
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
    }
  `}
  ${screen.desktop.desktop`&{display: none;} `}
`
