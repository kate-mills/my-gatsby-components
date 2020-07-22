import React from "react"
import styled from "styled-components"

const Announcement = ({ className }) => {
  return (
    <div id="announcement" className={`${className} grid-container`}>
      <div className="grid-item"></div>
      <div className="grid-item">
        <p> 707.637.4996 ~ info@michelecorley.com</p>
      </div>
      <div className="grid-item">
        <button
          onClick={() => {
            document.getElementById("announcement").style.display = "none"
          }}
        >
          x
        </button>
      </div>
    </div>
  )
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
    grid-template-rows: 80px;
    letter-spacing: 1.5px;
    line-height: 22px;
    width: 100vw;
  }
  & .grid-item {
    align-items: baseline;
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
    color: #ff665e;
  }
`
export default WrappedAnnouncement
