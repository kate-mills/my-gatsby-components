import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const createParentLink = (name, pth) => {
  let link= ( 
    <AniLink to={`/${pth}`} fade
      style={{ 
        lineHeight: "20px",
        padding: "4px 10px 10px 7px", 
        marginTop: "10px", 
        background: "var(--mainWhite)", 
      }}
    >{name}
    </AniLink>
  )
  return link
}

const createChildLink = (name) => {
  let pth = name.replace(' & ', ' ').split(' ').join('-')
  let obj = {
      path: `/${pth}`,
      text: (
        <span
          style={{
            lineHeight: "20px",
            padding: "4px 10px 10px 4px",
            background: "var(--mainWhite)",
          }}> {name} </span>
      ),
  }
  return obj
}

export default [
  { path: "/", text: "home", menu: [] },
  { path: "/about", text: "about", menu: [] },
  {
    text: createParentLink("products", "cleansers"),
    menu: [
      createChildLink("cleansers", "cleansers"),
      createChildLink("toners", "toners"),
      createChildLink("moisturizers & spf"),
      createChildLink("eyes & lips"),
      createChildLink("serums & specialty"),
      createChildLink("exfoliants"),
      createChildLink("masks"),
    ]
  },
  {
    text: createParentLink("education", "articles"),
    menu: [
      createChildLink("articles"),
      createChildLink("before & after"),
      createChildLink("press"),
      createChildLink("upcoming & classes"),
    ]
  },
  {
    text: createParentLink("why mc?", "why-choose-us"),
    menu: [
      createChildLink("why choose us"),
      createChildLink("rave reviews"),
    ]
  },
  { path: "/contact", text: "contact", menu: [] },
  { path: "/pro-orders", text: "pro orders", menu: [] },
  { id: "professional", menu:[] }
]
