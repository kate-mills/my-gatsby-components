import React from "react"
import Instagram from '../components/Instagram'
import { GrFacebook, GrVimeo } from "react-icons/gr"

export default [
  {
    icon: <GrFacebook />,
    url: "https://www.facebook.com/michelecorleyclinicalskincare/",
    class: "facebook",
    style: { color: "#3b998", background: "white" },
  },
  {
    icon: <GrVimeo />,
    url: "https://vimeo.com/michelecorley",
    class: "vimeo",
    style: { color: "#00adef", background: "white" },
  },
  {
    icon: <Instagram/>,
    url: "https://www.instagram.com/michelecorleyskincare/",
    class: "instagram-logo",
    style: { color: "#fff" },
  },
]
