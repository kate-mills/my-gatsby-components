import React from "react"
import { graphql  } from 'gatsby'
import Image from "gatsby-image"

import PageModel from "../components/PageModel"
import ContactForm from "../components/ContactForm"

import styled from "styled-components"

const ContactPage = ({data}) => {
  return (
    <PageModel title="Contact">
      <PageWrapper>
        <div className="flex-col">
          <div className="flex-item">
            <div className="contact-text-container">
              <h2
                style={{
                  fontSize: "30px",
                  lineHeight: "42px",
                  color: "rgba(179, 0,0, 0.8)",
                  fontWeight: "400",
                }}>
                Have questions about Michele Corley Clinical Skin Care?
              </h2>
              <p>
                Please contact us via the submission form or give us a call at 707.637.4996 and we'll get back to you as soon as we can. If you are a licensed professional, please include your license number. 
              </p>
              <p>
                Thank you!
              </p>
            </div>
            <div className="contact-img-container">
              <Image fluid={data.file.childImageSharp.fluid}/>
            </div>
          </div>
          <div className="flex-item"><ContactForm/></div>
        </div>
      </PageWrapper>
    </PageModel>
  )
}

const PageWrapper = styled.section`
  &{
    padding: 4rem 0;
  } 
  & .flex-col {
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 90%;
    margin: 0 auto;
  }
  & .flex-col .flex-item {
    width: 40%;
  }
  & .flex-col .flex-item .contact-img-container {
    width: 80%;
    border: 10px solid var(--mainWhite);
    border-radius: 25px;
    margin-inline-start: 10%;
    margin-inline-end: 10%;
  }
  & .flex-col .flex-item .contact-text-container {
    text-align: left;
    padding-inline-start: 10%;
    padding-inline-end: 10%;
    white-space: pre-line;
  }
  & .flex-col .flex-item .contact-text-container p {
   font-size: 15px;
   line-height: 27px;
   color: #5c5c5c;
   font-weight: 300;
   margin: 30px auto;
  }

  @media (max-width: 767px) {
    & .flex-col .flex-item{
      width: 80%;
    }
  }

  
  
`

export const query = graphql`
  {
    file(relativePath: {eq: "contact-img.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ContactPage
