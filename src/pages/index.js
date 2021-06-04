import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import tw, { styled } from 'twin.macro';
import Layout from '../components/Layout';
import Aside from '../components/Aside';
import MainContent from '../utils/mainContent';
import Wrapper from '../components/Wrapper';
import SEO from '../components/Seo';

function replacer(match, p1, p2, p3, offset, string) {
  const hash = p2
    .replace(/ /g, '-')
    .replace(/[?,:()“”"'’*]/g, '')
    .replace(/^-/, '')
    .replace(/&amp;/, '')
    .toLowerCase();
  return `<h${p1} id="${hash}">${p2}</h${p1}>`;
}

const TopLink = styled.a`
  ${tw`md:hidden bg-fateBlue-dark fixed text-white px-4 py-3 uppercase font-semibold text-2xl z-50`}
  bottom: 0;
`;

const BookOfHanz = ({ data }) => {
  let content = data.content.edges[0].node.html;
  content = content.replace(/<h(\d+)>([^<>]*)<\/h(\d+)>/gi, replacer);
  const toc = data.content.edges[0].node.headings;

  return (
    <Layout tw="relative">
      <SEO title="Read the Book" />
      <Wrapper>
        <Aside toc={toc} />
        <MainContent
          className="main-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Wrapper>
      <TopLink href="#toc">↑</TopLink>
    </Layout>
  );
};

export const query = graphql`
  {
    content: allMarkdownRemark(
      filter: {
        frontmatter: {
          title: { eq: "Book of Hanz" }
          language: { eq: "english" }
        }
      }
    ) {
      edges {
        node {
          html
          id
          headings(depth: h1) {
            value
          }
          frontmatter {
            language
          }
        }
      }
    }
  }
`;

BookOfHanz.propTypes = {
  data: PropTypes.object,
};

export default BookOfHanz;
