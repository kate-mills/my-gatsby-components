import React from "react"

import styled from "styled-components"
import { screen } from "../../css/js/media-functions"

import Image from "gatsby-image"

import VideoMedia from "./ProductPlayer"

const ProductMedia = ({ className, name, imgRetail, video }) => {
  return (
    <div className={`${className} media`}>
      <div className="flex-item image-media">
        <Image fixed={imgRetail.fixed} alt={imgRetail.description} />
      </div>
      <div className="flex-item video-media">
        {video ? (
          <VideoMedia id={video} url={`https://vimeo.com/${video}`} />
        ) : (
          false
        )}
      </div>
    </div>
  )
}

const MediaWrapper = styled(ProductMedia)`
  & { padding: 10px; }
  div.flex-item { transition: var(--mainTransition);}
  ${screen.phone.phone` 
    & {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      max-height: unset;
      max-width: inherit;
      padding: 30px auto;
    }
    & .video-media{width: 90vw;}
    & .flex-item {}

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
