import React from "react"

import PageModel from "../components/PageModel"

import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { setFont, setFlexContainer } from "../css/js/helper-styles"

const ErrorPage = () => {
  return (
    <PageModel name="Oops" title="Oops">
      <ErrorWrapper>
        <article>
          <h1 className="oops">Oops!</h1>
          <p>
            We couldn't find the page you were looking for. This is either
            because:
          </p>
          <ul>
            <li>
              There is an error in the URL entered into your web browser. Please
              check the URL and try again.
            </li>
            <li>The page you are looking for has been moved or deleted.</li>
          </ul>
          <p>
            {" "}
            You can return to our homepage by clicking{" "}
            <AniLink fade to="/">
              here
            </AniLink>
            .
          </p>
        </article>
      </ErrorWrapper>
    </PageModel>
  )
}
const ErrorWrapper = styled.section`
  & article h1 {
    margin-left: 5px;
  }
  & article {
    ${setFlexContainer({ direction: "column", y: "left" })};
    margin: 10px auto;
    width: 80%;
  }
  & article p {
    ${setFont({
      size: "15px",
      height: "27px",
      color: "#5c5c5c",
      weight: "300",
    })};
  }

  & article h1.oops {
    ${setFont({
      size: "45px",
      height: "1.2em",
      color: "#222222",
      weight: "300",
    })};
  }
  & article li {
    margin-left: 40px;
  }
`
export default ErrorPage
