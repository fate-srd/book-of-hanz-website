module.exports = {
  siteMetadata: {
    title: `Book of Hanz`,
    description: `The Book of Hanz unlocks the code to better Fate games than you ever imagined.`,
    author: `@amazingrando`,
    sharingImage: `https://bookofhanz.com/sharing.png`,
    siteUrl: `https://bookofhanz.com`,
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
