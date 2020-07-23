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
          borderLeft: "5px solid white",
          lineHeight: "32px",
          padding: "0 10px",
          background: "white",
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
              background: "white",
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
              background: "white",
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
              background: "white",
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
              background: "white",
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
              background: "white",
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
              background: "white",
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
              background: "white",
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
    text: (
      <span
        style={{
          borderLeft: "5px solid white",
          lineHeight: "32px",
          padding: "0 10px",
          background: "white",
        }}
      >
        why mc?
      </span>
    ),
    menu: [
      {
        path: "/why-mc",
        text: (
          <span
            style={{
              lineHeight: "32px",
              padding: "0 10px",
              background: "white",
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
              background: "white",
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
              background: "white",
            }}
          >
            rave reviews{" "}
          </span>
        ),
      },
      {
        path: "/press",
        text: (
          <span style={{ padding: "0 10px", background: "white" }}>press</span>
        ),
      },
    ],
  },
  {
    path: "/contact",
    text: "contact",
    menu: [],
  },
  {
    path: "/pro-orders",
    text: "pro orders",
    menu: [],
  },
]
