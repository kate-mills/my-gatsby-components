import React from "react"
import styled from "styled-components"
import ReactPlayer from "react-player"

const VideoMedia = ({ className, video }) => {
  return (
    <ReactPlayer
      controls={true}
      height={240}
      width={440}
      config={{
        vimeo: {
          playerOptions: {
            playsinline: true,
            controls: true,
          },
        },
      }}
      url={`https://vimeo.com/${video}`}
      crossOrigin=""
      samesite="None; Secure"
    />
  )
}
const VideoMediaWrapper = styled(VideoMedia)`
  & {
    max-width: 100%;
  }
`
export default VideoMediaWrapper
