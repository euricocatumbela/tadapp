module.exports = {
  siteMetadata: {
    title: `Takeanydoubt`,
    description: `Take Any Doubt is a web application platform that will provide online tutoring as well as offline.`,
    author: `EJC Technology`,
    
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
