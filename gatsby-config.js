module.exports = {
  siteMetadata: {
    title: `Walid Khaladi - Photographe Professionnel à Alger`,
    description: `Walid Khaladi est un photographe de mode et de célébrités basé à Alger qui réalise des portraits de magazines, des couvertures de livres, des affiches de théâtre, des photographies publicitaires et des look-books. Basé à Alger.`,
    author: `@walidkhaladi`,
    url: 'www.walidkhaladi.tk',
    siteUrl: `https://www.walidkhaladi.tk`,
  },
  plugins: [
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/wk-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    'gatsby-plugin-styled-components',
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
