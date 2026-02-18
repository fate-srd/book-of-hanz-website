import PropTypes from 'prop-types';
import * as React from 'react';
import { Link } from 'gatsby';
import tw from 'twin.macro';

const SidebarList = ({ category, sectionTitle, toc }) => {
  const apocryphaRoot = '/src/content/apocrypha/';

  return (
    <div>
      <h3 tw="font-semibold text-xl mt-5 pb-2">{sectionTitle}</h3>
      <ul tw="divide-y divide-fateGray-light">
        {toc.map((item) => {
          const { fileAbsolutePath } = item.node;
          const splitPath = fileAbsolutePath.split(apocryphaRoot);

          if (splitPath.length < 2) {
            return null;
          }

          const trimmedPath = splitPath[1];
          const absPathArray = trimmedPath.replace('.md', '').split('/');
          const filename = absPathArray[absPathArray.length - 1];
          const slug = `/apocrypha/${filename}`;

          if (absPathArray[0] !== category) {
            return null;
          }

          const [maybeDate, ...restParts] = filename.split('-');
          let displayTitle = filename.replace(/-/g, ' ').replace(/_/g, '’');

          if (/^\d{8}$/.test(maybeDate)) {
            const year = maybeDate.slice(0, 4);
            const month = maybeDate.slice(4, 6);
            const day = maybeDate.slice(6, 8);
            const monthNames = [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ];
            const monthIndex = parseInt(month, 10) - 1;
            const formattedDate = `${monthNames[monthIndex]} ${day}, ${year}`;
            const restTitle = restParts
              .join('-')
              .replace(/-/g, ' ')
              .replace(/_/g, '’');
            displayTitle = restTitle
              ? `${formattedDate} ${restTitle}`
              : formattedDate;
          }

          return (
            <li key={displayTitle} tw="py-2">
              <Link
                to={slug}
                className="text-fateBlue hover:text-fateBlue-darker hover:underline"
              >
                {displayTitle}...
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const AsideApocrypha = ({ toc }) => (
  <aside>
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
