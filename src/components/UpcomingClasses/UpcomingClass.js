import React from "react"
import Img from 'gatsby-image'
import styled from "styled-components"
import ClassMap from './ClassMap'

const SingleClass = ({className, id, data:{data}}) => {
  console.log('singleclass data: ', data.image)
  
  return (
      <div className={className}>
        <h2 className="ucls-name">{data.name}</h2>
        <div className="ucls__column__left">
          <h4 className="ucls-lheading">{data.heading}</h4>
          <div className="ucls-limage"> 
            <Img fluid={data.image.localFiles[0].childImageSharp.fluid} />
          </div>
          {
            data.heading_details ? 
              <p className="ucls-lheading_details">{data.heading_details}<br/>{data.datestr}</p>:
              false
          } 
          <h4 className="ucls-llocation">Located at {data.location}</h4>
          <h4 className="ucls-laddress">{data.address}<br/>{data.city_state}</h4>

        </div>
        <div className="ucls__column__right">
          <p className="ucls-rdescription">{data.description}</p>
          <ClassMap/>
        </div>
      </div>
  )
}

const Wrapper = styled(SingleClass)`
& {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-block-end: 80px;
  justify-content: space-around;
}
& .ucls-name{
  width: 100%;
  margin-bottom: 20px;
  text-align: center;
}
& .ucls__column__left,
& .ucls__column__right{
  display: flex;
  flex-direction: column;
  width: 45%;
  margin: 10px auto;
  text-align: center;
  white-space: pre-line;
  margin: 10px auto;
  text-align: center;
  white-space: pre-line;
}
& .ucls__column__left  {}
& .ucls__column__right {}
& h4 {
  color: #524c4c;
  font-style: normal;
  font-size: 21px;
  letter-spacing: 1px;
  line-height: 32px;
  text-align: center;
  font-weight: 400;
}
& .ucls-lheading{
  font-weight: 700;
  margin-top: 0px;
}
& .ucls-limage{
  margin: 0 auto;
  width: 70%;
}
& .ucls-llocation {
  margin-top: 0px;
  padding-top: unset;
}
& .ucls-laddress {
  font-style: italic;
  margin: unset;
}
& .ucls-rdescription {
  text-align: start;
  margin: 0 auto;
}
& .ucls-lheading_details{
  text-align: center;
  margin: 10px auto;
}
@media (max-width: 767px){
  & {
    flex-direction: column;
    margin: 0 auto;
  }
  & .ucls__column__left,
  & .ucls__column__right {
    width: 100%;
  }
  & .ucls__column__right  {
    margin-top: 20px;
    margin-bottom: 60px;
  }
  div.google-map{
    width: 300px;
    height: 200px;
  }
  & .ucls-laddress,
  & .ucls-lheading_details{
    width: 100%;
  }
  & .ucls-llocation,  
  & .ucls-rdescription{
    margin: 0 auto;
  }
}

@media (max-width: 540px){
  & .ucls-limage{ width: 100%; }
  & .ucls_rdescription{
    margin-top: 20px;
  } 

}




`

export default Wrapper
