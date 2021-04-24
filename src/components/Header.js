import * as React from 'react';
import { styled } from 'twin.macro';
import Hero from './Hero';
import BackgroundImage from '../images/bkg.png';

const HeaderWrapper = styled.div`
  background: url(${BackgroundImage});
`;

const Header = () => (
  <HeaderWrapper>
    <Hero />
  </HeaderWrapper>
);

export default Header;
