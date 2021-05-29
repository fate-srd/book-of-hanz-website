import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import MainContent from '../utils/mainContent';
import Wrapper1Col from '../components/Wrapper1Col';

const Apocrypha = ({ data }) => {
  const content = data.allMarkdownRemark.edges[0].node.html;
  const absPath = data.allMarkdownRemark.edges[0].node.fileAbsolutePath;
  const absPathArray = absPath.replace('.md', '').split('/');
  const title = absPathArray[absPathArray.length - 1];
  return (
    <Layout>
      <Wrapper1Col>
        <MainContent
          dangerouslySetInnerHTML={{ __html: `<h1>${title}</h1> ${content}` }}
        />
      </Wrapper1Col>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          title: { ne: "Book of Hanz" }
          language: { ne: "english" }
        }
        id: { eq: $id }
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
`;

Apocrypha.propTypes = {
  data: PropTypes.object,
};

export default Apocrypha;
