require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Michele Corley Clinical Skincare`,
    description: `Professional skincare available through your licensed skincare professional. Clean, safe, efficacious formulas.`,
    author: `@kate-mills`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `prof`,
        path: `${__dirname}/src/prof`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `michele corley clinical skincare`,
        short_name: `mcc`,
        start_url: `/`,
        background_color: `#ff645c`,
        theme_color: `#ff665e`,
        display: `minimal-ui`,
        icon: `src/images/android-chrome-192x192.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: ["https://foo.com", "https://bar.com"],
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API, 
        concurrency: 5,
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_EDUCATION_BASE_ID,
            tableName: `Articles`,
            mapping: {image: `fileNode`, pdf: `fileNode`}
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_EDUCATION_BASE_ID,
            tableName: `BeforeAfter`,
            mapping: {media: `fileNode`}
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_EDUCATION_BASE_ID,
            tableName: `Classes`,
            mapping: {image: `fileNode`}
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_PROFESSIONALS_BASE_ID,
            tableName: `Facials`,
            mapping: {pdf: `fileNode`}
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_PROFESSIONALS_BASE_ID,
            tableName: `Media`,
            mapping: {image: `fileNode`}
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_PROFESSIONALS_BASE_ID,
            tableName: `Manuals`,
            mapping: {pdf: `fileNode`}
          },
        ]
      }
    },
  ]
}
