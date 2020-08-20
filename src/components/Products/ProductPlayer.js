import React from "react"
import ReactPlayer from "react-player/vimeo"
// https://github.com/CookPete/react-player#config-prop
// https://github.com/CookPete/react-player

class VimeoPlayer extends React.Component {
  render() {
    return (
    this.props.vimeoUrl ? (
    false ) : (
      <ReactPlayer
        className="react-player aspect-ratio-box"
        url={this.props.url}
        width="427px"
        height="240px"
        controls
        config={{
          vimeo: {
            controls: true,
            playerOptions: {
              color: "eef4f7",
              title: true,
              width: "427px",
              height: "240px",
              portrait: true,
              playing: false,
              playsinline: true,
              controls: true,
              frameborder: "0",
              allow: "autoplay; fullscreen",
            },
          },
        }}
      />
    )
  )}
}
export default VimeoPlayer
