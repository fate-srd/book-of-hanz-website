import PropTypes from 'prop-types';
import * as React from 'react';
import { Link } from 'gatsby';
import tw, { styled } from 'twin.macro';

const TOCLink = tw.a`
text-fateBlue hover:text-fateBlue-darker hover:underline 
`;

const Aside = ({ toc, languageURL, languageText }) => (
  <aside>
    <nav tw="md:sticky md:h-screen md:overflow-y-auto mt-4" css={{ top: '0' }}>
      <h2
        id="toc"
        tw="font-semibold text-2xl mt-5 border-b border-solid border-fateGray-light pb-2"
      >
        The Book of Hanz
        <Link
          to={languageURL}
          tw="block pt-1 text-sm font-normal italic text-fateBlue hover:text-fateBlue-darker hover:underline"
        >
          {languageText}
        </Link>
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
);

Aside.propTypes = {
  toc: PropTypes.array,
  languageURL: PropTypes.string,
  languageText: PropTypes.string,
};

export default Aside;
