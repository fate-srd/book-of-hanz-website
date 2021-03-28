/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      bookOfHanz: allMarkdownRemark {
        edges {
          node {
            html
            id
            headings(depth: h1) {
              value
            }
          }
        }
      }
    }
  `).then((result) => {
    result.data.bookOfHanz.edges.forEach(({ node }) => {
      createPage({
        path: `read`,
        component: path.resolve(`./src/pages/book.js`),
        context: {
          id: node.id,
        },
      });
    });
  });
};
