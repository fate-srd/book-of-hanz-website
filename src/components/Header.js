import PropTypes from 'prop-types';
import * as React from 'react';
import { styled } from 'twin.macro';
import Hero from './Hero';
import BackgroundImage from '../images/bkg.png';

const HeaderWrapper = styled.div`
  background: url(${BackgroundImage});
`;

const Header = ({ children }) => (
  <HeaderWrapper>
    <Hero />
    {children}
  </HeaderWrapper>
);

Header.propTypes = {
  children: PropTypes.object,
};

export default Header;
