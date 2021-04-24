import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import tw, { styled } from 'twin.macro';
import Layout from '../components/Layout';

const Wrapper = styled.div`
  background: white;
  ${tw`text-gray-600 p-5`}

  @media only screen and (min-width: 768px) {
    padding-top: 150px;
    grid-template-columns: 200px 2fr;
    grid-template-rows: auto;
    gap: 2rem;
  }
  ${tw`md:grid md:pb-5 md:pl-10 md:pr-10`}

  @media only screen and (min-width: 1024px) {
    padding-top: 150px;
    grid-template-columns: minmax(200px, 300px) 2fr;
    grid-template-rows: auto;
    gap: 4rem;
  }
  ${tw`lg:pb-10 lg:pl-20 lg:pr-20`}
`;

const MainContent = styled.main`
  h1 {
    ${tw`text-fateBlue-dark font-bold text-2xl md:text-4xl mt-9 mb-4`}
  }
  h1 + p,
  h2 + p {
    text-indent: 0; 
  }
  h2 {
    ${tw`font-semibold text-xl mt-5 mb-2`}
  }
  p {
    text-indent: 2rem;
    ${tw`md:text-lg md:leading-7 md:text-justify`}
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

const TopLink = styled.a`
  ${tw`md:hidden bg-fateBlue-dark sticky text-white px-4 py-3 uppercase font-semibold text-2xl`}
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
        <aside>
          <nav
            tw="md:sticky md:h-screen md:overflow-y-auto mt-4"
            css={{ top: '0' }}
          >
            <h2
              id="toc"
              tw="font-semibold text-2xl mt-5 border-b border-solid border-fateGray-light pb-2"
            >
              The Book of Hanz
            </h2>
            <ul tw="divide-y divide-fateGray-light">
              {toc.map((item) => (
                <li key={item.value} tw="py-2">
                  <TOCLink
                    href={`#${item.value
                      .replace(/ /g, '-')
                      .replace(/[?,:()“”"'’*]/g, '')
                      .replace(/^-/, '')
                      .replace(/&amp;/, '')
                      .toLowerCase()}`}
                  >
                    {item.value}
                  </TOCLink>
                </li>
              ))}{' '}
            </ul>
          </nav>
        </aside>
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
        }
      }
    }
  }
`;

BookOfHanz.propTypes = {
  data: PropTypes.object,
};

export default BookOfHanz;
