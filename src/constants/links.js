import React from "react"

export default [
  {
    path: "/",
    text: "home",
    menu: [],
  },
  {
    path: "/about",
    text: "about",
    menu: [],
  },
  {
    text: (
      <span
        style={{
          borderLeft: "5px solid var(--mainWhite)",
          lineHeight: "32px",
          padding: "0 10px",
          background: "var(--mainWhite)",
        }}
      >
        products
      </span>
    ),
    menu: [
      {
        path: "/cleansers",
        text: (
          <span
            style={{
              lineHeight: "32px",
              padding: "0 10px",
              background: "var(--mainWhite)",
            }}
          >
            cleansers
          </span>
        ),
      },
      {
        path: "/toners",
        text: (
          <span
            style={{
              lineHeight: "32px",
              padding: "0 10px",
              background: "var(--mainWhite)",
            }}
          >
            toners
          </span>
        ),
      },
      {
        path: "/moisturizers-spf",
        text: (
          <span
            style={{
              lineHeight: "32px",
              padding: "0 10px",
              background: "var(--mainWhite)",
            }}
          >
            moisturizers & spf
          </span>
        ),
      },
      {
        path: "/eyes-lips",
        text: (
          <span
            style={{
              lineHeight: "32px",
              padding: "0 10px",
              background: "var(--mainWhite)",
            }}
          >
            eyes & lips
          </span>
        ),
      },
      {
        path: "/serums-specialty",
        text: (
          <span
            style={{
              lineHeight: "32px",
              padding: "0 10px",
              background: "var(--mainWhite)",
            }}
          >
            serums & specialty
          </span>
        ),
      },
      {
        path: "/exfoliants",
        text: (
          <span
            style={{
              lineHeight: "32px",
              padding: "0 10px",
              background: "var(--mainWhite)",
            }}
          >
            exfoliants
          </span>
        ),
      },
      {
        path: "/masks",
        text: (
          <span
            style={{
              background: "var(--mainWhite)",
              lineHeight: "32px",
              padding: "0 10px",
            }}
          >
            masks
          </span>
        ),
      },
    ],
  },
  {
    text: ( <span style={{ lineHeight: "32px", padding: "0 10px", background: "var(--mainWhite)", }} > education  </span>),
    menu: [
      {
        path: "/upcoming-classes",
        text: (
          <span
            style={{
              lineHeight: "32px",
              padding: "0 10px",
              background: "var(--mainWhite)",
            }}
          >
          upcoming classes
          </span>
        ),
      },
      {
        path: "/articles",
        text: (
          <span
            style={{
              lineHeight: "32px",
              padding: "0 10px",
              background: "var(--mainWhite)",
            }}
          >
          articles
          </span>
        ),
      }
    ]
  },
  {
    text: ( <span style={{ borderLeft: "5px solid var(--mainWhite)", lineHeight: "32px", padding: "0 10px", background: "var(--mainWhite)", }} > why mc?  </span>),
    menu: [
      {
        path: "/why-mc",
        text: (
          <span
            style={{
              lineHeight: "32px",
              padding: "0 10px",
              background: "var(--mainWhite)",
            }}
          >
            why choose us?
          </span>
        ),
      },
      {
        path: "/before-and-after",
        text: (
          <span
            style={{
              lineHeight: "32px",
              padding: "0 10px",
              background: "var(--mainWhite)",
            }}
          >
            before and after
          </span>
        ),
      },
      {
        path: "/rave-reviews",
        text: (
          <span
            style={{
              lineHeight: "32px",
              padding: "0 10px",
              background: "var(--mainWhite)",
            }}
          >
            rave reviews{" "}
          </span>
        ),
      },
      { path: "/press", text: ( <span style={{ padding: "0 10px", background: "var(--mainWhite)" }}> press </span>), },
    ],
  },
  { path: "/contact", text: "contact", menu: [] },
  {
    path: "/pro-orders",
    text: "pro orders",
    menu: [],
  },
{
  id: "professional",
  menu:[]
}
]
