import PropTypes from 'prop-types';
import * as React from 'react';
import { Link } from 'gatsby';
import tw from 'twin.macro';

const SidebarList = ({ category, sectionTitle, toc }) => (
  <div>
    {console.log(toc)}
    <h3 tw="font-semibold text-xl mt-5 pb-2">{sectionTitle}</h3>
    <ul tw="divide-y divide-fateGray-light">
      {toc.map((item) => {
        console.log(item.node.fileAbsolutePath);
        const trimmedPath = item.node.fileAbsolutePath.replace(
          '/Users/oest/Documents/Sites/ar/book-of-hanz/src/content/apocrypha/',
          ''
        );
        const absPathArray = trimmedPath.replace('.md', '').split('/');
        const title = absPathArray[absPathArray.length - 1]
          .replace(/-/g, ' ')
          .replace(/_/g, '’');
        console.log(absPathArray);
        console.log(`category is ${category}`);
        const slug = `/apocrypha/${absPathArray[absPathArray.length - 1]}`;
        if (absPathArray[0] === category) {
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
        }
        return null;
      })}
    </ul>
  </div>
);

const AsideApocrypha = ({ toc }) => (
  <aside>
    {console.log(toc)}
    <nav tw="md:sticky md:h-screen md:overflow-y-auto mt-4" css={{ top: '0' }}>
      <h2
        id="toc"
        tw="font-semibold text-2xl mt-5 border-b border-solid border-fateGray-light pb-2"
      >
        Apocrypha of Hanz
      </h2>
      <SidebarList
        category="TotD"
        sectionTitle="Thought of the Day"
        toc={toc}
      />
      <SidebarList category="fate" sectionTitle="Fate Posts" toc={toc} />
    </nav>
  </aside>
);

AsideApocrypha.propTypes = {
  toc: PropTypes.array,
};

SidebarList.propTypes = {
  toc: PropTypes.array,
  category: PropTypes.string,
  sectionTitle: PropTypes.string,
};

export default AsideApocrypha;
