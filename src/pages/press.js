import React from "react"

import {graphql} from 'gatsby'
import PageModel from "../components/PageModel"
import PressList from '../components/Press/PressList'


import styled from "styled-components"

const Press = ({data}) => {
  return (
    <PageModel title="Press">
      <PressWrapper>
        <h2>Press</h2>
        <PressList pressList={data.allAirtable.pressList}/>
      </PressWrapper>
    </PageModel>
  )
}

export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "Press"}}, sort: {fields: data___mcc_id, order: ASC}) {
      pressList: nodes {
        id
        data {
          mcc_id
          summary
          image {
            localFiles {
              childImageSharp {
                fluid {
                ...GatsbyImageSharpFluid
                }
              }
            }
          }
          link
          activeLink
        }
      }
    }
  }
`
const PressWrapper = styled.section`
  & h2{
    margin: 0 auto;
    text-align: center;
  }
`

export default Press
