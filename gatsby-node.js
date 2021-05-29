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
      allMarkdownRemark(
        filter: {
          frontmatter: {
            title: { ne: "Book of Hanz" }
            language: { ne: "english" }
          }
        }
      ) {
        edges {
          node {
            html
            id
            frontmatter {
              language
            }
            fileAbsolutePath
          }
        }
      }
    }
  `).then((result) => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      console.log(node.fileAbsolutePath);
      const absPath = node.fileAbsolutePath;
      const absPathArray = absPath.replace('.md', '').split('/');
      const title = absPathArray[absPathArray.length - 1];

      createPage({
        path: `apocrypha/${title}`,
        component: path.resolve(`./src/pages/apocrypha.js`),
        context: {
          id: node.id,
        },
      });
    });
  });
};
