import React from "react"
import styled from "styled-components"
import {screen} from "../css/js/media-functions"
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
            <button onClick={ () => { this.handleClick() }}>x</button>
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
    grid-template-columns: 1fr 12fr 1fr;
    grid-template-rows: 36px;
    letter-spacing: 1.5px;
    width: 100vw;
    height: 36px;
  }
  & .grid-item {
    align-items: center;
    border-bottom-right: 1px solid rgba(0, 0, 0, 0);
    display: flex;
    justify-content: center;
    white-space: nowrap;
  }
  & .grid-item:last-child {
    align-items: center;
    background-clip: border-box;
    border-radius: 5px;
    justify-content: flex-end;
    margin: 0;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-top: 5px;
  }
  button {
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid #c6c6c6;
    border-radius: 5px;
    background-clip: border-box !important;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    padding: 0.9rem 1.6rem;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.3s linear;
  }
  button:hover {
    background: #ffffff;
    color: #5c5c5c;
    border 1px solid #ffffff;
  }
  @media (max-width: 570px){
    & { display: none; }
  }
`
export default WrappedAnnouncement
