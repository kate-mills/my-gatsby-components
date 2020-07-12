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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `michele corley clinical skincare`,
        short_name: `mcc`,
        start_url: `/`,
        background_color: `#ff645c`,
        theme_color: `#ff645c`,
        display: `minimal-ui`,
        icon: `src/images/android-chrome-192x192.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
