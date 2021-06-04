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
        <h2 tw="text-fateBlue-dark font-bold text-xl md:text-3xl mt-9 mb-4">
          The Team
        </h2>
        <p style={{ textIndent: '0', marginBottom: '1rem' }}>
          <strong>Robert Hanz — Role: Writer</strong>
        </p>
        <p style={{ textIndent: '0', marginBottom: '1rem' }}>
          Robert is a Fate RPG superfan. He can be found dispensing wisdom in
          Fate communities across the internet. He is also one of the authors of
          Fate Condensed, the latest and greatest iteration of Fate.
        </p>
        <p style={{ textIndent: '0', marginBottom: '1rem' }}>
          <strong>John Adamus — Role: Editor</strong>
        </p>
        <p style={{ textIndent: '0', marginBottom: '1rem' }}>
          John is an ENnie award-winning editor whose work can be found in Fate
          Core, The Dresden Files Role-Playing Game, Night’s Black Agents, and
          loads of other RPGs. He can found on Twitter @awesome_john where he
          continues to help people tell their stories and make their games.
        </p>
        <p style={{ textIndent: '0', marginBottom: '1rem' }}>
          <strong>
            Randy Oest (aka @amazingrando) — Roles: Kickstarter Project Manager,
            Layout
          </strong>
        </p>
        <p style={{ textIndent: '0', marginBottom: '1rem' }}>
          Randy is the creative force behind the Fate SRD. He won a Silver ENNIE
          for fate-srd.com and a Gold ENNIE for his other SRD site,
          bladesinthedark.com. He is a Creative Director who has worked in
          printing, marketing, and digital spaces for more than 20 years.{' '}
        </p>
      </MainContent>
    </Wrapper1Col>
  </Layout>
);

export default About;
