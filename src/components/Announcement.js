import React from "react"
import styled from "styled-components"
import Email from "./Email"
import {getAnnouncementStatus, setHideStatus} from "../utils/announcement"

class Announcement extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      details:<div style={{display:"none"}}/>,
      hiddenDetails: <div style={{display:"none"}}/>,
      visibleDetails: ( <div id="x" className={`${this.props.className} grid-container`}>
          <div className="grid-item"></div>
          <div className="grid-item">
            <p style={{padding: "0", paddingTop: "0px", lineHeight: "17px", textAlign: "center", color: "#5c5c5c", fontFamily: "Times, serif"}}> 707.637.4996 ~ <Email color={`#5c5c5c`} subject={`General Information`}/></p>
          </div>
          <div className="grid-item">
            <button onClick={ () => { this.handleClick() }}>X</button>
          </div>
        </div>),
    }
  }
  componentDidMount(){
    if(getAnnouncementStatus()){
      this.setState({details: this.state.visibleDetails})
    }
  }
  handleClick = ()=>{
    setHideStatus();
    this.setState({details: this.state.hiddenDetails})
  }
  render(){
    return this.state.details
  }
}

const WrappedAnnouncement = styled(Announcement)`
  & {
    background: var(--mainMcc);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    color: #ffffff;
    display: grid;
    font-family: Times, serif;
    font-size: 18px;
    font-weight: 400;
    grid-template-columns: 1fr 20fr 1fr;
    grid-template-rows: 36px;
    letter-spacing: 1.5px;
    width: 100vw;
    height: 36px;
  }
  & .grid-item {
    align-items: center;
    display: flex;
    justify-content: center;
    white-space: nowrap;
  }
  & .grid-item:last-child {
    align-items: right;
  }
  & button {
    line-height: 17px;
    background: inherit;
    border: 1px solid var(--mainMcc);
    border-radius: 5px;
    background-clip: border-box !important;
    box-sizing: border-box;
    color: #5c5c5c;
    cursor: pointer;
    display: inline-block;
    padding: 0.9rem 1.6rem;
    text-decoration: none;
    transition: background 100ms linear;
  }
  & button:hover {
    background: #ffffff;
    color: #5c5c5c;
    border 1px solid #ffffff;
  }
  @media (max-width: 570px){
    & { display: none; }
  }
`
export default WrappedAnnouncement
