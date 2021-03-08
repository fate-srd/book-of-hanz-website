import * as React from 'react';
import { Link } from 'gatsby';
import tw, { styled, css } from 'twin.macro';

const NavPrimaryWrapper = styled.nav`
  ${tw`bg-fateBlue-darker text-white text-xl font-semibold`}
`;

const LinkStyles = css`
  ${tw`px-5 py-2 hover:bg-fateBlue-darkest transition-all rounded`}
`;

const NavPrimary = () => (
  <NavPrimaryWrapper>
    <ul tw="flex flex-row flex-nowrap py-3 px-5">
      <li>
        <Link to="/read" css={LinkStyles}>
          Book of Hanz
        </Link>
      </li>
      <li>
        <Link to="/apocrypha" css={LinkStyles}>
          Apocrypha of Hanz
        </Link>
      </li>
    </ul>
  </NavPrimaryWrapper>
);

export default NavPrimary;
