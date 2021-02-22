module.exports = {
  siteMetadata: {
    title: 'book-of-hanz',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Inter'],
        },
      },
    },
  ],
};
