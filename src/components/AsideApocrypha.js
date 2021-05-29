import PropTypes from 'prop-types';
import * as React from 'react';
import { Link } from 'gatsby';

const AsideApocrypha = ({ toc }) => (
  <aside>
    <nav tw="md:sticky md:h-screen md:overflow-y-auto mt-4" css={{ top: '0' }}>
      <h2
        id="toc"
        tw="font-semibold text-2xl mt-5 border-b border-solid border-fateGray-light pb-2"
      >
        Apocrypha of Hanz
      </h2>
      <ul tw="divide-y divide-fateGray-light">
        {toc.map((item) => {
          const absPathArray = item.node.fileAbsolutePath
            .replace('.md', '')
            .split('/');
          const title = absPathArray[absPathArray.length - 1]
            .replace(/-/g, ' ')
            .replace(/_/g, '’');
          const slug = `/apocrypha/${absPathArray[absPathArray.length - 1]}`;
          return (
            <li key={title} tw="py-2">
              <Link
                to={slug}
                className="text-fateBlue hover:text-fateBlue-darker hover:underline"
              >
                {title}...
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  </aside>
);

AsideApocrypha.propTypes = {
  toc: PropTypes.array,
};

export default AsideApocrypha;
