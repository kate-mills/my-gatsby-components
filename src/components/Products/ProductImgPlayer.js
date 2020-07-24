import React from "react"

import styled from "styled-components"
import { screen } from "../../css/js/media-functions"

import Image from "gatsby-image"

import VideoMedia from "./ProductPlayer"

const ProductMedia = ({ className, name, imgRetail, video }) => {
  return (
    <div className={`${className} media`}>
      <Image
        className="img flex-item"
        fixed={imgRetail.fixed}
        alt={imgRetail.description}
      />
      <VideoMedia video={video} />
    </div>
  )
}

const MediaWrapper = styled(ProductMedia)`
  & {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 10px 0;
  }
  & iframe {
    width: 440px;
    height: 240px;
  }
  div.flex-item {
    transition: var(--mainTransition);
  }
  ${screen.phone.phone` & { justify-content: center; } `}
`
export default MediaWrapper
