import * as React from 'react';
import tw, { styled } from 'twin.macro';
import logo from '../images/book-of-hanz.svg';
import cover from '../images/Book of Hanz Cover copy.jpg';
import dice from '../images/dice.png';
import diceShadow from '../images/dice-shadows.png';

const HeroWrapper = styled.header`
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-template-rows: auto;
  ${tw`text-center text-white p-16`};
`;

const CoverImage = styled.img`
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2.8px 2.2px 0 rgba(0, 0, 0, 0.06),
    0 6.7px 5.3px 0 rgba(0, 0, 0, 0.08), 0 12.5px 10px 0 rgba(0, 0, 0, 0.1),
    0 22.3px 17.9px 0 rgba(0, 0, 0, 0.13), 0 41.8px 33.4px 0 rgba(0, 0, 0, 0.15);
  max-width: 30vw;
`;

const Title = styled.img`
  width: 100%;
  ${tw`mt-12`}
`;

const FateDice = styled.div`
  position: relative;
  margin-top: -10rem;
  .dice-shadow {
    position: absolute;
    top: 0;
    left: 0;
    mix-blend-mode: multiply;
  }
`;

const Hero = () => (
  <HeroWrapper>
    <h1 tw="w-full h-full">
      <Title tw="mx-auto" src={logo} alt="The Book of Hanz for the Fate RPG" />
      <span tw="hidden">The Book of Hanz for the Fate RPG</span>
    </h1>
    <CoverImage src={cover} alt="Cover of the Book of Hanz" />
    <FateDice>
      <img src={dice} alt="" />
      <img className="dice-shadow" src={diceShadow} alt="" />
    </FateDice>
  </HeroWrapper>
);

export default Hero;
