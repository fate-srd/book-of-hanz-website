import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import tw, { styled } from 'twin.macro';

const Wrapper = tw.div`
max-w-2xl mx-auto text-gray-600 px-5
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
    <Wrapper>
      <MainContent dangerouslySetInnerHTML={{ __html: content }} />
    </Wrapper>
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
