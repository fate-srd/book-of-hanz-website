import * as React from 'react';
import tw, { styled } from 'twin.macro';
import Layout from '../components/Layout';
import MainContent from '../utils/mainContent';

const Wrapper = styled.div`
  background: white;
  ${tw`text-gray-600 p-5 z-20 relative`}
  ${tw`md:pb-5 md:pl-10 md:pr-10`}
  ${tw`lg:pb-10 lg:pl-20 lg:pr-20`}
`;

const Home = () => (
  <Layout tw="relative">
    <Wrapper>
      <MainContent className="main-content">
        <h2>
          Once the Kickstarter backers have all of their copies the Book of Hanz
          will be posted here for sale (print and PDF).
        </h2>
        <p>
          <em>
            "The Book of Hanz was a fundamental source for finally
            [understanding]
          </em>{' '}
          <em>
            Fate's paradigm and actually putting people together to play it."
          </em>
        </p>
        <h1>Have more fun in every Fate RPG game.</h1>
        <p>
          Collected for the first time in paperback, The Book of Hanz unlocks
          the code to better Fate games than you ever imagined.
          <span className="Apple-converted-space"> </span>
        </p>
        <p>In these pages, you’ll discover . . .</p>
        <ul>
          <li>Introducing People to Fate</li>
          <li>Fiction First</li>
          <li>Collaborative Setting Creation</li>
          <li>
            Pacing Mechanisms<span className="Apple-converted-space"> </span>
          </li>
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
        <h2>
          The Book of Hanz is a guide for how to run the Fate Roleplaying Game
        </h2>
        <p>
          The <a href="https://fate-srd.com/">Fate Roleplaying Game</a> is a
          game focused on telling exciting stories. The game takes inspiration
          from movies and shows we love and gives players a way of making the
          story theirs.{' '}
        </p>
        <p>
          This is a big departure from how big games in the RPG industry are set
          up. They tend to model real-world actions, like six-second turns or
          modeling real combat. Because this is so different from the narrative
          flexibility Fate gives players, this can be hard to understand.
        </p>
        <p>Enter the Book of Hanz. But it wasn't intended to be a book.</p>
        <h2>Almost Lost with Google Plus</h2>
        <p>
          Robert Hanz is a fan of Fate and very active on Google Plus. Before{' '}
          <a href="https://en.wikipedia.org/wiki/Google%2B#Shutdown_of_consumer_version">
            it was shut down
          </a>
          , Google Plus was host to a wealth of RPG communities and people.
          Robert wrote a huge number of what he calls posts&mdash;and I call
          essays&mdash;on how to run and play Fate. The essays cover topics such
          as putting fiction first, pacing mechanisms, conflicts, and aspects.
        </p>
        <p>
          These essays were shared among the Fate community to help bring new
          people into Fate. Then Google decided to turn off Google Plus.
          Fortunately, these essays were exported and saved before the servers
          turned dark.
        </p>
        <h2>You Can Read the Book of Hanz Right Now, So Why Get This Book?</h2>
        <p>
          The{' '}
          <a
            href="https://fate-srd.com/odds-ends/book-hanz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book of Hanz is available
          </a>{' '}
          on the Fate SRD. You can read it on your phone right now. You may have
          even read it already.
        </p>
        <p>
          This version of the Book of Hanz is a tribute to its history and
          importance to the Fate RPG community. It is also a chance to have this
          as a printed book to sit on your shelf with your other Fate books.
        </p>
        <h2>Key Features </h2>
        <ul>
          <li>
            This collected book has been edited by{' '}
            <a href="http://writernextdoor.com/">John Adamus</a>, making the
            essays stronger and more clear.
          </li>
          <li>
            Be able to show off the book next to the other Fate books on your
            shelf
          </li>
          <li>
            Loan this nice book out to friends who want to learn more about
            Fate.
          </li>
        </ul>
      </MainContent>
    </Wrapper>
  </Layout>
);

export default Home;
