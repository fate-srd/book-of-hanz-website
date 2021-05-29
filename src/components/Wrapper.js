import PropTypes from 'prop-types';
import React from 'react';
import tw, { styled } from 'twin.macro';

const WrapperDiv = styled.div`
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

const Wrapper = ({ children }) => <WrapperDiv>{children}</WrapperDiv>;

Wrapper.propTypes = {
  children: PropTypes.array,
};

export default Wrapper;
