module.exports = {
  siteMetadata: {
    title: 'book-of-hanz',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `book`,
        path: `${__dirname}/src/content`,
        ignore: [`apocrypha/**`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `apocrypha-fate`,
        path: `${__dirname}/src/content/apocrypha/fate`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
