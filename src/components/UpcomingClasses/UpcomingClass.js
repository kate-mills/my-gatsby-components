import React from "react"
import Img from 'gatsby-image'
import styled from "styled-components"
import ClassMap from './ClassMap'

const SingleClass = ({className, id, data:{data}}) => {
  return (
      <div className={className}>
        <h2 className="class__name">{data.name}</h2>
        <div className="left__column">
          <h4 className="left__heading">{data.heading}</h4>
          <div className="left__image__container"> 
            <Img fluid={data.image.localFiles[0].childImageSharp.fluid} />
          </div>
          {
            data.heading_details ? 
              <p className="left__heading__details">{data.heading_details}<br/>{data.datestr}</p>:
              false
          } 
          <h4 className="class__location">Located at {data.location}</h4>
          <h4 className="class__address">{data.address}<br/>{data.city_state}</h4>

        </div>
        <div className="right__column">
          <div className="class__description__container">
            <p className="class__description">{data.description}</p>
          </div>
          <div className="map-container">
            <ClassMap />
          </div>
        </div>
      </div>
  )
}
const Wrapper = styled(SingleClass)`
& {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}
& .class__name{
  width: 100%;
  text-align: center;
}
& p{
    padding-bottom: 0;
}
& .left__column, & .right__column{
  display: flex;
  flex-direction: column;
  width: 50%;
  text-align: center;
  white-space: pre-line;
  margin: 0 auto;
  text-align: center;
  white-space: pre-line;
}
& h4 {
  color: #524c4c;
  font-style: normal;
  font-size: 21px;
  letter-spacing: 1px;
  line-height: 32px;
  text-align: center;
  font-weight: 400;
}
& .left__heading{
  font-weight: 700;
  margin-top: 0px;
}
& .left__image__container .gatsby-image-wrapper{
  width: 50%;
}
& .class__description__container, & .left__image__container{
  display: flex;
  justify-content: center;
  align-items: center;
}
& .class__location{
  margin-top: 0px;
  padding-top: unset;
}
& .class__address{
  font-style: italic;
  font-weight: 300;
  margin: unset;
}
& .class__description{
  text-align: justify;
}
& div.google-map{
  min-height: 100%;
  max-width: 100%;
}
& .map-container{
  width: 100%;;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
& .left__heading__details{
  text-align: center;
  margin: 10px auto;
}
@media (max-width: 767px){
  & {
    flex-direction: column;
    margin: 0 auto;
  }
  & .left__column, & .right__column{
    width: 100%;
  }
  & .right__column{
    margin-top: 20px;
    margin-bottom: 60px;
  }
  & .class__address, & .left__heading__details{
    width: 100%;
  }
  & .class__location, & .class__description{
    margin: 0 auto;
  }
}
@media (max-width: 540px){
  & .left__image__container{width: 100%;}
  & .class_rdescription{
    margin-top: 20px;
  }
}
`
export default Wrapper;
