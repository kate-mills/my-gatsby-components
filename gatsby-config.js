require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Michele Corley Clinical Skincare`,
    description: `Professional skin care products available through licensed estheticians. Clean, safe, efficacious formulas.`,
    author: `MCC`,
    siteUrl: `https://my-gatsby-components.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    {
      resolve:'gatsby-plugin-robots-txt',
      options:{
        host: `https://my-gatsby-components.netlify.app`,
        sitemap:`https://my-gatsby-components.netlify.app/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`
      }
    },
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
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: 'maskable',
          },
        ],
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
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
            baseId: process.env.GATSBY_AIRTABLE_MARKETING_BASE_ID,
            tableName: `RaveReviews`,
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_MARKETING_BASE_ID,
            tableName: `Press`,
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
    `gatsby-plugin-preload-fonts`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {typekit:{ id:`wua6cxq`, },}
    },
    {
    resolve: "gatsby-plugin-netlify-cache",
    options: {
      cachePublic: true
    }
  },
  ]
}
