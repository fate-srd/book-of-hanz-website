import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import tw, { styled } from 'twin.macro';
import Layout from '../components/Layout';
import Aside from '../components/Aside'
import MainContent from '../utils/mainContent'

const Wrapper = styled.div`
  background: white;
  ${tw`text-gray-600 p-5 z-20 relative`}

  @media only screen and (min-width: 768px) {
    grid-template-columns: 200px 2fr;
    grid-template-rows: auto;
    gap: 2rem;
  }
  ${tw`md:grid md:pb-5 md:pl-10 md:pr-10`}

  @media only screen and (min-width: 1024px) {
    grid-template-columns: minmax(200px, 300px) 2fr;
    grid-template-rows: auto;
    gap: 4rem;
  }
  ${tw`lg:pb-10 lg:pl-20 lg:pr-20`}
`;

const TopLink = styled.a`
  ${tw`md:hidden bg-fateBlue-dark sticky text-white px-4 py-3 uppercase font-semibold text-2xl z-20`}
  bottom: 0;
`;

function replacer(match, p1, p2, p3, offset, string) {
  const hash = p2
    .replace(/ /g, '-')
    .replace(/[?,:()“”"'’*]/g, '')
    .replace(/^-/, '')
    .replace(/&amp;/, '')
    .toLowerCase();
  return `<h${p1} id="${hash}">${p2}</h${p1}>`;
}

const BookOfHanz = ({ data }) => {
  let content = data.content.edges[0].node.html;
  content = content.replace(/<h(\d+)>([^<>]*)<\/h(\d+)>/gi, replacer);
  const toc = data.content.edges[0].node.headings;

  return (
    <Layout tw="relative">
      <Wrapper>
        <Aside toc={toc}/>
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
  query {
    content: allMarkdownRemark {
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
