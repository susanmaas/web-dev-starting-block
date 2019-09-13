

module.exports = {
  siteMetadata: {
    title: `Web Dev Starting Block`,
    author: `Susan Maas`,
    description: `A web development blog for beginners.`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
  ]
}
