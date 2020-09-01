import React from "react"

import styled from "styled-components"
import { screen } from "../../css/js/media-functions"

import Image from "gatsby-image"

import VideoMedia from "./ProductPlayer"

const ProductMedia = ({ className, name, imgRetail, video, vimeoUrl }) => {
  if(vimeoUrl){ video = null }
  return (
    <div className={`${className} media aspect-ratio-box`}>
        <Image 
          fixed={imgRetail.fixed}
          title={imgRetail.title}
          alt={imgRetail.description}
        />
      { video ? (
        <VideoMedia id={video} url={`https://vimeo.com/${video}`} />
      ) : (
        <div></div>
      )}
    </div>
  )
}

const MediaWrapper = styled(ProductMedia)`
  & img{
    border: 10px solid var(--mainWhite);
    border-radius: 30px;
  }
  & { padding: 10px; }
  ${screen.phone.phone` 
    & {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      align-items: center;
      max-height: unset;
      max-width: inherit;
      padding: 30px auto;
    }
    .react-player{max-width: 100vw;}
    & img{border 1px solid var(--mainWhite);}
  `}
  ${screen.tablet.tablet`
    & {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
      max-height: 560px;
    }
  `}
  ${screen.desktop.desktop`
    & {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      align-items: center;
      max-height: 240px;
    }
    & .video-media{width: 440px;}
  `}
`
export default MediaWrapper
