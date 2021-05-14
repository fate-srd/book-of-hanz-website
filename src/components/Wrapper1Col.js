import PropTypes from 'prop-types';
import React from 'react';
import tw, { styled } from 'twin.macro';

const WrapperDiv = styled.div`
  background: white;
  ${tw`text-gray-600 p-5 z-20 relative md:pb-5 md:pl-10 md:pr-10 lg:pb-10 lg:pl-20 lg:pr-20`}
`;

const Wrapper1Col = ({ children }) => <WrapperDiv>{children}</WrapperDiv>;

Wrapper1Col.propTypes = {
  children: PropTypes.object,
};

export default Wrapper1Col;
