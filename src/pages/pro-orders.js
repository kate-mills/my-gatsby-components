import React from "react"
import Email from "../components/Email"

import PageModel from "../components/PageModel"

import styled from "styled-components"

const ProOrders = () => {
  return (
    <PageModel title="Pro Orders" centeredTitle>
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
          <p className="contains-email">
            If you need a login to place online orders contact us{` - `}
            <Email subject="Pro Order Login"/>
          </p>
      </ProOrdersWrapper>
    </PageModel>
  )
}
const ProOrdersWrapper = styled.section`
  & {
    width: 90%;
    font-size: 20px;
    color: #54c4c;
    font-weight: 400;
  }
  @media (max-width: 600px){
    & .email-prefix{
      display: block;
    }
  }
  @media (max-width: 400px){
    &{width: 100%;}
    & p {
      text-align: justify;
      margin: 0 auto;
    }
  }
`
export default ProOrders
