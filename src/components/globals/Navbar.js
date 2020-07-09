import React, {Component} from "react"

import styled from 'styled-components'

class Navbar extends Component {
  render(){
    return (
      <div className={this.props.className}>
        <nav>
          <ul>
            <li>Navbar</li>
          </ul>
        </nav>
        </div>
    )
  }
}

export default  styled(Navbar)`
  & {background: pink;}
`
