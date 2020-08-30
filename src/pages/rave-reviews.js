import React from "react"
import {graphql} from 'gatsby'

import PageModel from "../components/PageModel"
import RaveReviewList from "../components/RaveReviews/RaveReviewList"

import styled from "styled-components"

const RaveReviews = ({data}) => {
  return (
    <PageModel title="Rave Reviews">
      <RaveReviewsWrapper>
        <h1 className="pink-h1">Rave Reviews!</h1>
        <RaveReviewList reviews={data.allAirtable.reviews}/>
      </RaveReviewsWrapper>
    </PageModel>
  )
}

export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "RaveReviews"}}, sort: {fields: data___mcc_id, order: ASC}) {
      reviews: nodes {
        id
        data {
          review
          signature
        }
      }
    }
  }
`
const RaveReviewsWrapper = styled.section`
  & {
    max-width: 98%;
    margin: 5px auto;
    box-sizing: border-box;
  }
  & .pink-h1{
    text-align: center;
  }
  & div{ margin-block-start: 20px; }
  & div:first-child{ margin-block-start: 0; }
`
export default RaveReviews
