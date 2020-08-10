import React from "react"
import Email from "../components/Email"

import PageModel from "../components/PageModel"

import styled from "styled-components"

const ProOrders = () => {
  return (
    <PageModel title="Pro Orders">
      <ProOrdersWrapper>
          <p>
            If you have a login for online ordering click{" "}
            <a href="https://portal.nowcommerce.com/custsignin.aspx?ID=99867" target="_blank" rel="noreferrer">
              HERE
            </a>
          </p>
          <p>
            Please note we have a $100 minimum order (Exception - Best Sellers
            Travel Size Kit).
          </p>
          <p>
            If you need a login to place online orders contact us{` - `}
            <Email subject="Pro Order Login"/>
          </p>
      </ProOrdersWrapper>
    </PageModel>
  )
}
const ProOrdersWrapper = styled.section`
  & *, & > * { box-sizing: border-box; }
  & {
    width: 90%;
    box-sizing; border-box;
    font-size: 20px;
    color: #54c4c;
    font-weight: 400;
  }
  @media (max-width: 600px){
    & .email-prefix{
      box-sizing; border-box;
      display: block;
      padding: 5px;
    }
  }
  @media (max-width: 400px){
    &{width: 100%;}
    & p {
      box-sizing; border-box;
      text-align: justify;
      margin: 0 auto;
    }
  }
`
export default ProOrders
