import React from 'react'
import {screen} from '../css/js/media-functions'
import styled from 'styled-components'

const HeadingOneOrTwo  = ({children,  text, num, className}) => {
  return (
    <div className={className}>
      { num > 1 ? 
         <h2>{text}</h2>:
         <h1 className="nav-blocker">{text}</h1>
      }
    </div>
  )
}
export default styled(HeadingOneOrTwo)`
  & {
    background-color: ${props => props.backgroundColor || "white"};
    margin: 0 auto;
    z-index: -100;
    position: sticky;
    text-align: center;
  }
  h1 {
    font-size: 45px;
    line-height: 54px;
    color: #222222;
    font-style: normal;
    font-weight: 300;
    margin: 0 auto;

  }
  h2 {
    font-size: 30px;
    line-height: 42px;
    color: rgba(179,0,0,.8)};
    font-style: normal;
    font-weight: 400;
    margin: 0 auto;
  }

  ${screen.phone.phone`
     &{width: 100%;}
     h1{width:80%;}
   `}
  ${screen.tablet.tablet`
    & {width: 70%;}
    h1{width: 80%;} 
   `}
  ${screen.desktop.desktop`
    & {width: 70%;}
    h1{width: 100%;}
  `}
`


