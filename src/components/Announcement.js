import React from "react"
import styled from "styled-components"
import {screen} from "../css/js/media-functions"
import Email from "./Email"
import {handleStatus, checkShowStatus} from "../utils/announcement"

class Announcement extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      hiddenDetails: <div style={{display:"none"}}/>,
      visibleDetails: ( <div id="x" className={`${this.props.className} grid-container`}>
          <div className="grid-item"></div>
          <div className="grid-item">
            <p style={{padding: "0", color: "var(--mainWhite)"}}> 707.637.4996 ~ <Email color={`white`} subject={`General Information`}/></p>
          </div>
          <div className="grid-item">
            <button onClick={ () => { this.handleClick() }}>x</button>
          </div>
        </div>),
      showAnnouncement: checkShowStatus()
    }
  }
  handleClick = ()=>{
    handleStatus();
    this.setState({showAnnouncement: false})
  }
  render(){
    return ( this.state.showAnnouncement ?  this.state.visibleDetails: this.state.hiddenDetails)
  }
}

const WrappedAnnouncement = styled(Announcement)`
  & {
    background: #ff665e;
    border: 1px solid rgba(0, 0, 0, 0.1);
    color: #ffffff;
    display: grid;
    font-family: Times New Roman, Times, serif;
    font-size: 18px;
    font-weight: 400;
    grid-template-columns: 1fr 12fr 1fr;
    grid-template-rows: 55px;
    letter-spacing: 1.5px;
    line-height: 22px;
    width: 100vw;
  }
  & .grid-item {
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0);
    display: flex;
    justify-content: center;
    padding: 10px;
  }
  & .grid-item:last-child {
    justify-content: flex-end;
    padding-right: 0;
    padding-top: 0;
  }
  button {
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0);
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    margin: 0;
    padding: 0.9rem 1.6rem;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.3s linear;
  }
  button:hover {
    background: #ffffff;
    color: var(--mccPink);
  }
  ${screen.phone.phone` & {display: none;} `}
  ${screen.tablet.tablet` & {display: none;} `}
`
export default WrappedAnnouncement
