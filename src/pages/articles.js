import React from "react"

import {graphql} from 'gatsby'

import PageModel from "../components/PageModel"

import ArticleList from "../components/Articles/ArticleList"
import styled from "styled-components"

const Articles = ({data}) => {
  return (
    <PageModel name="Articles" title="Articles">
      <ArticlesWrapper>
        <ArticleList articles={data.allAirtable.articles}/>
      </ArticlesWrapper>
    </PageModel>
  )
}
const ArticlesWrapper = styled.section``

export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "Articles"}}, sort: {fields: data___date, order: DESC}) {
      articles: nodes {
        id
        article:data {
          name
          link
          date(formatString: "MMMM DD, YYYY")
          preview
          pdf {
            id
            localFiles {
              publicURL
            }
          }
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
export default Articles
