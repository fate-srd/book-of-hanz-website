import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import AsideApocrypha from '../components/AsideApocrypha';
import MainContent from '../utils/mainContent';
import Wrapper from '../components/Wrapper';
import SEO from '../components/Seo';

const Apocrypha = ({ data }) => {
  const content = data.allMarkdownRemark.edges[0].node.html;
  const absPath = data.allMarkdownRemark.edges[0].node.fileAbsolutePath;
  const absPathArray = absPath.replace('.md', '').split('/');
  const title = absPathArray[absPathArray.length - 1]
    .replace(/-/g, ' ')
    .replace(/_/g, '’');

  const toc = data.toc.edges;

  return (
    <Layout>
      <SEO title="Apocrypha" />
      <Wrapper>
        <AsideApocrypha toc={toc} />
        <MainContent
          dangerouslySetInnerHTML={{
            __html: `<h1>${title}...</h1> ${content}`,
          }}
        />
      </Wrapper>
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
    toc: allMarkdownRemark(
      filter: {
        frontmatter: {
          title: { ne: "Book of Hanz" }
          language: { ne: "english" }
        }
      }
    ) {
      edges {
        node {
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
