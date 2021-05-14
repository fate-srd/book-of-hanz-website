import * as React from 'react';
import { Link } from 'gatsby';
import tw, { styled, css } from 'twin.macro';

const NavPrimaryWrapper = styled.nav`
  ${tw`bg-fateBlue-darker text-white text-xl font-semibold`}

  a[aria-current='page'] {
    ${tw`bg-fateBlue-darkest`}
  }
`;

const LinkStyles = css`
  ${tw`text-base md:text-xl px-2 md:px-5 py-2 hover:bg-fateBlue-darkest transition-all rounded mr-2 whitespace-nowrap`}
`;

const NavPrimary = () => (
  <NavPrimaryWrapper className="primary-nav">
    <ul tw="flex flex-row flex-nowrap py-2 md:py-3 px-2 md:px-5">
      <li>
        <Link to="/" css={LinkStyles}>
          Book of Hanz
        </Link>
      </li>
      <li>
        <Link to="/apocrypha" css={LinkStyles}>
          Apocrypha
        </Link>
      </li>
      <li>
        <Link to="/about" css={LinkStyles}>
          About
        </Link>
      </li>
    </ul>
  </NavPrimaryWrapper>
);

export default NavPrimary;
