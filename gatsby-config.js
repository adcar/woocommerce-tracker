module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: "gatsby-source-woocommerce",
      options: {
        // Base URL of Wordpress site
        api: "https://www.calypsoedu.com/",

        // This counts controls the API get with ?per_page=
        // default: 10
        itemCount: 20,

        // set to true to see fetch output in console, during build
        // default: false
        verbose: true,

        // true if using https. false if nah.
        https: true,
        api_keys: {
          consumer_key: "ck_5af9612e2da703aa10769c0f2ff4e44e174acb94",
          consumer_secret: "cs_397305ab4c3bb66d8a52f0bb820797ddd3526f61",
        },
        // Array of strings with fields you'd like to create nodes for...
        fields: ["orders"],
      },
    },
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
