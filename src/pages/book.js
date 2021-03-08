import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import tw, { styled } from 'twin.macro';
import Layout from '../components/Layout';

const Wrapper = styled.div`
  background: white;
  margin-top: -200px;
  padding-top: 150px;
  grid-template-columns: minmax(200px, 300px) 2fr;
  grid-template-rows: auto;
  gap: 4rem;
  ${tw`grid pb-10 pl-20 pr-20 text-gray-600`}
`;

const MainContent = styled.main`
  h1 {
    ${tw`text-fateBlue-dark font-bold text-4xl mt-9 mb-4`}
  }
  h1 + p,
  h2 + p {
    text-indent: 0;
  }
  h2 {
    ${tw`font-semibold text-2xl mt-5 mb-2`}
  }
  p {
    text-indent: 2rem;
    ${tw`text-lg leading-7 text-justify`}
  }
  ol {
    ${tw`list-decimal text-lg leading-7 pl-14`}
  }
  ul {
    ${tw`list-disc text-lg leading-7 pl-14`}
  }
  .conversation p {
    text-indent: 0;
    ${tw`mb-2`}
  }
`;

const TOCLink = tw.a`
text-fateBlue hover:text-fateBlue-darker hover:underline 
`;

const BookOfHanz = ({ data }) => {
  const content = data.content.edges[0].node.html;
  const toc = data.content.edges[0].node.headings;

  return (
    <Layout>
      <Wrapper>
        <aside>
          <nav tw="sticky h-screen overflow-y-auto mt-4" css={{ top: '0' }}>
            <h2 tw="font-semibold text-2xl mt-5 border-b border-solid border-fateGray-light pb-2">
              The Book of Hanz
            </h2>
            <ul tw="divide-y divide-fateGray-light">
              {toc.map((item) => (
                <li key={item.value} tw="py-2">
                  <TOCLink href="#">{item.value}</TOCLink>
                </li>
              ))}{' '}
            </ul>
          </nav>
        </aside>
        <MainContent dangerouslySetInnerHTML={{ __html: content }} />
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query {
    content: allMarkdownRemark(
      filter: { id: { eq: "7abc3cc8-23dd-5528-9877-5d582a576795" } }
    ) {
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
`;

BookOfHanz.propTypes = {
  data: PropTypes.object,
};

export default BookOfHanz;
