import React from 'react'
import styled from "styled-components"
import { screen } from "../../css/js/media-functions"

import Image from "gatsby-image"

const ProductMedia = ({className,  name, imgRetail, video }) => {

  return (
    <div className={`${className} media`}>
      <div className="flex-item">
        <Image className="img" fixed={imgRetail.fixed} alt={imgRetail.description}/>
      </div>
      <div className="flex-item">
        <iframe 
          className="media-video"
          crossOrigin="SameSite" samesite="None; Secure"
          src={`https://player.vimeo.com/video/${video}?color=ff665e&byline=0&title=0`}
          title={name}
          name={name}
          width="440"
          height="250"
          frameBorder="0" 
          allow="autoplay; fullscreen" 
          allowFullScreen>
        </iframe>
      </div>
    </div>
  )
}

const MediaWrapper = styled(ProductMedia)`
  & {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 auto;
    align-items: center;
  }
  & .flex-item{object-fit: cover;}
  ${screen.phone.phone`
    & .flex-item { }
    iframe{width: fit-content;}
  `}
`
export default MediaWrapper
