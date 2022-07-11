import React from 'react';
import Layout from '../components/Layout';
import MainContent from '../utils/mainContent';
import Wrapper1Col from '../components/Wrapper1Col';
import SEO from '../components/Seo';

const Licensing = () => (
  <Layout>
    <SEO title="About" />
    <Wrapper1Col>
      <MainContent>
        <h1 tw="text-fateBlue-dark font-bold text-2xl md:text-4xl mt-9 mb-4">
          Book of Hanz Licensing
        </h1>
        <p style={{ textIndent: '0', marginBottom: '1rem' }}>
          The first requirement for using content from the Book of Hanz is to
          give us credit. You can see how to do this below.
        </p>
        <p style={{ textIndent: '0', marginBottom: '1rem' }}>
          Next, you cannot imply or state that Amazing Rando Design is
          sponsoring your work unless you've made special arrangements for that.
        </p>
        <p style={{ textIndent: '0', marginBottom: '1rem' }}>
          Finally, you can’t use the Book of Hanz to make something which would
          be prejudicial to Amazing Rando Design’s honor or reputation. (That’s
          exactly how the legal license puts it.) We’re not sure how you’d do
          that, but don’t. That’s all the legal stuff.
        </p>
        <h2>Attribution for using the Book of Hanz material</h2>
        <blockquote className="bg-fateBlue text-white p-5 rounded">
          This work is based on The Book of Hanz (found at
          https://bookofhanz.com/), a product of Amazing Rando Design,
          developed, authored, and edited by Robert Hanz, John Adamus, and Randy
          Oest and licensed for our use under the Creative Commons Attribution
          3.0 Unported license (http://creativecommons.org/licenses/by/3.0/).
        </blockquote>
      </MainContent>
    </Wrapper1Col>
  </Layout>
);

export default Licensing;
