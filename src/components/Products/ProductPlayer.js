import React from "react"
import ReactPlayer from "react-player"
// https://github.com/CookPete/react-player#config-prop
// https://github.com/CookPete/react-player

class VimeoPlayer extends React.Component {
  render() {
    return (
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={`https://vimeo.com/${this.props.id}`}
          crossOrigin=""
          samesite="None; Secure"
          width="427px"
          height="240px"
          controls
          onReady={() => console.log("ready")}
          onError={e => {
            console.log("error", e)
            console.log(this)
          }}
          config={{
            vimeo: {
              controls: true,
              width: "240px",
              height: "427px",
              playerOptions: {
                color: "eef4f7",
                title: false,
                height: "240px",
                width: "427px",
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
      </div>
    )
  }
}
export default VimeoPlayer
