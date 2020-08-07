import React from "react"
import Img from 'gatsby-image'
import styled from "styled-components"


const SingleArticle = ({data}) => {
  const{name, image, link, date, preview} = data.article
  const arrow = <span className="arrow">→</span>
  return (
    <ArticleWrapper>
      <h5 className="article-name">{name}</h5>
      <p className="article-date"> {date} </p>
      <div className="article-image-container">
        <a href={link} target="_blank" rel="noreferrer">
          <Img fluid={image.localFiles[0].childImageSharp.fluid} alt={`Shows a preview of the article titled '${name}' in the ${date} Dermascope magazine.`}/>
        </a>
        <br/>
        <p className="article-preview">{preview}<a href={link} target="_blank" rel="noreferrer"><span className="article-readmore"><span className="article-dots">{`...`}</span>Read more {arrow}</span></a></p>
      </div>
    </ArticleWrapper>
  )
}
const ArticleWrapper = styled.article`
& {
  width: 80%;
  margin: 50px auto;
  margin-block-end: 100px;
}
& .article-image-container{
  width: 60%;
  margin: 0 auto;
}
& a {text-decoration: none;}
& .article-name, & .article-date {
  text-align: center;
  white-space: pre-wrap;
}
& .article-name{
  color: #444444;
  font-family: 'proxima-nova';
  font-weight: 300;
  font-style: normal;
  font-size: 30px;
  line-height: 36px;
  margin-top: 30px;
}
& .article-date{
  font-style: italic;
  color: rgba(0, 0, 0, 0.4);
  display:block;
}
& .article-preview{
  text-align: center;
  padding-bottom: 0px;
  white-space: pre-wrap;
}
& span.article-readmore{
  text-align: right;
  white-space: nowrap;
  color:#5c5c5c;
  font-style: italic;
  font-size: 13px;
}
& span.article-readmore span.article-dots{
  color: var(--mainWhite);
  cursor: default;
}
& .arrow{
  font-family: fantasy;
  font-size: 15px;
  font-style: normal;
  position: relative;
  top: 3px;
}

`
export default SingleArticle

