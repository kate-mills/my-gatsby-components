import React from "react"
import ReactPlayer from "react-player/vimeo"

class VimeoPlayer extends React.Component {
  render() {
    return (

      <ReactPlayer
        url={this.props.url}
        className={`react-player aspect-ratio-box`}
        width="425px"
        height="238px"
        controls={true}
        playsinline={true}
        style={{
          height: "100%",
          width: "100%",
        }}
        config={{
          vimeo: {
            playerOptions: {
              autopause: true,
              byline: true,
              controls: true,
              portrait: true,
              title: true,
              playing: false,
              frameborder: false,
            },
          },
        }}
      />
    )}
}
export default VimeoPlayer
