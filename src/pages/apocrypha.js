import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import AsideApocrypha from '../components/AsideApocrypha';
import MainContent from '../utils/mainContent';
import Wrapper from '../components/Wrapper';
import SEO from '../components/Seo';

const Apocrypha = ({ data }) => {
  const content = data.allMarkdownRemark.edges[0].node.html;
  const absPath = data.allMarkdownRemark.edges[0].node.fileAbsolutePath;
  const absPathArray = absPath.replace('.md', '').split('/');
  const filename = absPathArray[absPathArray.length - 1];

  const [maybeDate, ...restParts] = filename.split('-');
  let title = filename.replace(/-/g, ' ').replace(/_/g, '’');

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
    const formattedDate = `${monthNames[monthIndex]}, ${day}, ${year}`;
    const restTitle = restParts
      .join('-')
      .replace(/-/g, ' ')
      .replace(/_/g, '’');
    title = restTitle ? `${formattedDate} ${restTitle}` : formattedDate;
  }

  const toc = data.toc.edges;

  const formattedContent = content.replace(
    /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})([-+]\d{4})/g,
    (match, year, month, day, hour, minute, second, offset) => {
      const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];

      const monthIndex = parseInt(month, 10) - 1;
      const hourNum = parseInt(hour, 10);
      const isPM = hourNum >= 12;
      const hour12 = hourNum % 12 === 0 ? 12 : hourNum % 12;
      const ampm = isPM ? 'PM' : 'AM';

      const formattedDate = `${monthNames[monthIndex]} ${day}, ${year}`;
      const formattedTime = `${hour12}:${minute} ${ampm}`;

      return `${formattedDate} at ${formattedTime} ${offset}`;
    }
  );

  return (
    <Layout>
      <SEO title="Apocrypha" />
      <Wrapper>
        <AsideApocrypha toc={toc} />
        <MainContent
          dangerouslySetInnerHTML={{
            __html: `<h1>${title}...</h1> ${formattedContent}`,
          }}
        />
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query($id: String) {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          title: { ne: "Book of Hanz" }
          language: { ne: "english" }
        }
        id: { eq: $id }
      }
    ) {
      edges {
        node {
          html
          id
          frontmatter {
            language
          }
          fileAbsolutePath
        }
      }
    }
    toc: allMarkdownRemark(
      filter: {
        frontmatter: {
          title: { ne: "Book of Hanz" }
          language: { ne: "english" }
        }
      }
    ) {
      edges {
        node {
          fileAbsolutePath
          id
        }
      }
    }
  }
`;

Apocrypha.propTypes = {
  data: PropTypes.object,
};

export default Apocrypha;
