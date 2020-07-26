import React from "react"
import styled from "styled-components"
import { screen } from "../../css/js/media-functions"

import Image from "gatsby-image"

const ProductMedia = ({ className, name, imgRetail, video }) => {
  return (
    <div className={`${className} media`}>
      <Image
        className="img flex-item"
        fixed={imgRetail.fixed}
        height="240"
        objectFit="contain"
        objectPosition="50% 50%"
        alt={imgRetail.description}
      />
      <iframe
        className="media-video flex-item"
        crossOrigin="None; Secure"
        secure="true"
        src={`https://player.vimeo.com/video/${video}?color=ff665e&byline=0&title=0`}
        title={name}
        name={name}
        width="440"
        height="250"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  )
}

const MediaWrapper = styled(ProductMedia)`
  & {
    display: flex;
    flex-direction: row;
    padding: 10px 0;
    justify-content: space-evenly;
  }
  div.flex-item {
  }

  & > div.flex-item,
  & > div.flex-item.iframe {
    object-fit: cover;
  }
  ${screen.phone.phone`
    & .flex-item { }
    iframe{width: fit-content;}
  `}
`
export default MediaWrapper
