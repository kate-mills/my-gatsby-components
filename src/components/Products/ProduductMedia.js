import React from 'react'
import styled from "styled-components"
import { screen } from "../../css/js/media-functions"

import Image from "gatsby-image"

const ProductMedia = ({className,  name, imgRetail, video }) => {

  return (
    <div className={`${className} media`}>
        <Image objectFit="contain" fluid={imgRetail.fluid} className="media-img" alt={imgRetail.description}/>
        <iframe 
          className="media-video"
          crossOrigin="SameSite" samesite="None; Secure"
          src={`https://player.vimeo.com/video/${video}?color=ff665e&byline=0&title=0`}
          title={name}
          name={name}
          width="640"
          height="360"
          frameBorder="0" 
          allow="autoplay; fullscreen" 
          allowFullScreen>
        </iframe>
    </div>
  )
}

const MediaWrapper = styled(ProductMedia)`
  & {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    margin: 0 auto;
  }
  & .media-img {width: 100%; }
  & .media-video {width: 100%;}


  ${screen.phone.phone`iframe {margin: 0 auto; height: auto;}`}
  ${screen.tablet.tablet`iframe {margin: 0 auto; height: auto;}`}

  ${screen.desktop.desktop`
    & {flex-direction: row;}
    & .media-img {width: 25%; margin: 0 auto;}
    & .media-video {width: 50%; margin: 0 auto;}
  `};
`
export default MediaWrapper
