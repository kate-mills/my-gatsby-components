import React from 'react'
import {screen} from '../css/js/media-functions'
import styled from 'styled-components'

const HeadingOneOrTwo  = ({children,  text, num, className}) => {
  return (
    <div className={className}>
      { num > 1 ? 
         <h2>{text}</h2>:
         <h1>{text}</h1>
      }
    </div>
  )
}
export default styled(HeadingOneOrTwo)`
  & {
    margin: 0 auto;
    background-color: ${props => props.backgroundColor || "white"};
    text-align: ${props => props.center ? "center": "center"};
    ${screen.font.setFont(30, 45)};
  }
  h2 {color: rgba(179,0,0,.8)};
  ${screen.phone.phone`
     &{width:80%;}
   `}
  ${screen.tablet.tablet`
     &{width: 60%;} 
   `}
  ${screen.desktop.desktop`
    &{width: 80%;}
  `}
`


