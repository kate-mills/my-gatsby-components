import React from 'react'
import styled from "styled-components"
import Email from './Email'

const ContactInfo = (props) => {
  return (
    <Wrapper style={{ width: (props.wrapperWidth || "80%") }}>
    <div className="phone-email">
      <h3>Get in touch </h3>
      <div>
        <h4>Phone:</h4>
        <p>(707) 637-4996</p>
      </div>
      <div>
        <h4>Email:</h4>
        <p><Email/></p>
      </div>
    </div>
    <div className="office-hours">
      <h3>Our Hours</h3>
      <p>Mon - Fri: 10AM - 4PM</p>
      <p>Saturday & Sunday:{` `}Closed</p>
    </div>
    <div className="address">
      <h3>Our Location</h3>
      <p>3055 Jefferson St. Suite 3</p>
      <p>Napa, CA 94558</p>
    </div>
  </Wrapper>
    )
}

const Wrapper = styled.aside`
  & div.address, & div.phone-email, & div.office-hours{
    text-align: center;
    margin: 5px auto;
    white-space: pre-line;
  }
  & > div h3{
    background: var(--mainMcc);
    width: 75%;
    text-align: center;
    margin: 5px auto;
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
