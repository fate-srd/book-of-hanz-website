import PropTypes from 'prop-types';
import * as React from 'react';
import tw, { styled } from 'twin.macro';
import Header from './Header';
import FateHeader from './FateHeader';

import BackgroundImage from '../images/bkg.png';

const LayoutWrapper = styled.div`
  background: url(${BackgroundImage});
`;

const Layout = ({ children }) => (
  <LayoutWrapper>
    <FateHeader />
    <Header />
    {children}
  </LayoutWrapper>
);

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
