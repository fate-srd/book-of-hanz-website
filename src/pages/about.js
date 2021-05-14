import React from 'react';
import Layout from '../components/Layout';
import MainContent from '../utils/mainContent';
import Wrapper1Col from '../components/Wrapper1Col';

const About = () => (
  <Layout>
    <Wrapper1Col>
      <MainContent>
        <h1 tw="text-fateBlue-dark font-bold text-2xl md:text-4xl mt-9 mb-4">
          Have more fun in every Fate RPG game.
        </h1>
        <p style={{ textIndent: '0', marginBottom: '1rem' }}>
          <em>
            "The Book of Hanz was a fundamental source for finally
            [understanding] Fate's paradigm and actually putting people together
            to play it.
          </em>
        </p>

        <p style={{ textIndent: '0', marginBottom: '1rem' }}>
          Collected for the first time in paperback, The Book of Hanz unlocks
          the code to better Fate games than you ever imagined.
        </p>

        <p style={{ textIndent: '0', marginBottom: '1rem' }}>
          In these pages, you’ll discover...
        </p>
        <ul>
          <li>Introducing People to Fate</li>
          <li>Fiction First</li>
          <li>Collaborative Setting Creation</li>
          <li>Pacing Mechanisms </li>
          <li>Fiction, not Physics</li>
          <li>Writing Good Aspects</li>
          <li>Fate doesn’t have a damage system</li>
          <li>The Not-So-Hidden Logic of Paying to Invoke Aspects</li>
          <li>Failure</li>
          <li>Demystifying the Fate Fractal</li>
          <li>Fate’s Big Question</li>
          <li>Missing rules in Fate</li>
          <li>Advice for new Fate players</li>
        </ul>
      </MainContent>
    </Wrapper1Col>
  </Layout>
);

export default About;
