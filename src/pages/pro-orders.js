import React from "react"

import PageModel from "../components/PageModel"

import styled from "styled-components"

const ProOrders = () => {
  return (
    <PageModel title="Pro Orders">
      <ProOrdersWrapper>
        <article>
          <p>
            If you have a login for online ordering click{" "}
            <a
              href="https://portal.nowcommerce.com/custsignin.aspx?ID=99867"
            >
              HERE
            </a>
          </p>
          <p>
            Please note we have a $100 minimum order (Exception - Best Sellers
            Travel Size Kit).
          </p>
          <p>
            If you need a login to place online orders contact us -
            info@michelecorley.com
          </p>
        </article>
      </ProOrdersWrapper>
    </PageModel>
  )
}

const ProOrdersWrapper = styled.section`
  & {
    margin: 30px auto;
    font-size: 20px;
    color: #54c4c;
    font-weight: 400;
  }
  & p {
    line-height: 30px;
    padding: 20px;
    margin-left: 30px;
    text-align: left;
  }
`

export default ProOrders
