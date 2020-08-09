import React from "react"
import {graphql} from 'gatsby'

import PageModel from "../components/PageModel"
import RaveReviewList from "../components/RaveReviews/RaveReviewList"

import styled from "styled-components"

const RaveReviews = ({data}) => {
  return (
    <PageModel title="Rave Reviews">
      <RaveReviewsWrapper>
        <h2 className="heading">Rave Reviews!</h2>
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
    width: 85%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-bottom: 1rem;
    text-align: left;
    box-sizing: border-box;
  }


  & .heading{
    text-align: center;
  }


`

export default RaveReviews
