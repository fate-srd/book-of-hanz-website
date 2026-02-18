module.exports = {
  trailingSlash: `never`,
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
    {
      resolve: `gatsby-plugin-umami`,
      options: {
        websiteId: '3a735553-6f11-4f6d-9877-1e688ae43c2a',
        srcUrl: 'https://umami-amazingrando.herokuapp.com/umami.js',
        includeInDevelopment: false,
        autoTrack: true,
        respectDoNotTrack: true,
      },
    },
    {
      resolve: 'gatsby-plugin-fathom',
      options: {
        siteId: 'QXXIVNKO',
        honorDnt: true,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
