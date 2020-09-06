import React from 'react'
import styled from "styled-components"
import Email from './Email'

const ContactInfo = (props) => {
  return (
    <Wrapper style={{ width: (props.wrapperWidth || "80%") }}>
    <div className="phone-email">
      <h3>Get in touch </h3>
      <div>
        <h4 style={{marginRight: "2px"}}>Phone:</h4>
        <p><a
            style={{textDecoration: "none"}}
            href="tel:1-707-637-4996">(707) 637-4996
           </a>
        </p>
      </div>
      <div>
        <h4 style={{marginRight: "4px"}}>Email:</h4>
        <p><Email/></p>
      </div>
      <div style={{flexDirection: "row", flexWrap: "wrap"}}>
        <h4 style={{}}>Address:</h4>
        <address>
        <p style={{marginLeft: "15px"}}>3055 Jefferson St. Suite 3</p>
        <p style={{marginLeft: "70px"}}>Napa, CA 94558</p>
        </address>
      </div>
    </div>
    <div className="hours">
      <h3>Our Hours</h3>
      <p style={{padding: "0"}}>Monday - Friday:{` `}
        <time dateTime="10:00">10 AM</time> - <time dateTime="16:00">4 PM</time></p>
    </div>
  </Wrapper>
    )
}

const Wrapper = styled.aside`
  & div.phone-email, & div.hours{
    text-align: center;
    margin: 5px auto;
    white-space: pre-line;
  }
  & > div h3{
    background: var(--mainMcc);
    width: 75%;
    text-align: center;
    margin: 10px auto;
    white-space: pre-line;
  }
  & > div p, & > div h4{
    margin: 0 0 0;
    padding: 0 0 0.1rem;
    white-space: pre-wrap;
  }
  & > div.phone-email div{
    margin: 0 auto;
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    text-align: left;
  }
  & > div.phone-email div h4{
      text-align: justify;
      width: 55px;
  }
  @media (max-width: 467px) {
  & > div.phone-email div{
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
      margin: 0 auto;
      text-align: center;
      width: 100%;
    }
    & > div.phone-email div > h4{ text-align: center; margin: 0 auto; }
    & > div.phone-email div p{width:100%;}
  }
`

export default ContactInfo;
