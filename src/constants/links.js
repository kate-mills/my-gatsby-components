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
          borderLeft: "5px solid var(--offWhite)",
          lineHeight: "32px",
          padding: "0 10px",
          background: "var(--offWhite)",
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
              background: "var(--offWhite)",
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
              background: "var(--offWhite)",
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
              background: "var(--offWhite)",
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
              background: "var(--offWhite)",
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
              background: "var(--offWhite)",
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
              background: "var(--offWhite)",
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
              background: "var(--offWhite)",
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
          borderLeft: "5px solid var(--offWhite)",
          lineHeight: "32px",
          padding: "0 10px",
          background: "var(--offWhite)",
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
              background: "var(--offWhite)",
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
              background: "var(--offWhite)",
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
              background: "var(--offWhite)",
            }}
          >
            rave reviews{" "}
          </span>
        ),
      },
      {
        path: "/press",
        text: (
          <span style={{ padding: "0 10px", background: "var(--offWhite)" }}>
            press
          </span>
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
