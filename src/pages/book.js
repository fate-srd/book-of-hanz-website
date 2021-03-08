import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import tw, { styled } from 'twin.macro';
import Layout from '../components/Layout';

const Wrapper = styled.div`
  background: white;
  margin-top: -200px;
  padding-top: 4rem;
  ${tw`pb-10 text-gray-600`}
`;

const MainContent = styled.main`
  margin-top: 4rem;
  ${tw`px-10 pb-10 max-w-4xl mx-auto `}
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
    ${tw`leading-6 text-justify`}
  }
  .conversation p {
    text-indent: 0;
    ${tw`mb-2`}
  }
`;

const BookOfHanz = ({ data }) => {
  const content = data.content.edges[0].node.html;

  return (
    <Layout>
      <Wrapper>
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
        }
      }
    }
  }
`;

BookOfHanz.propTypes = {
  data: PropTypes.object,
};

export default BookOfHanz;
