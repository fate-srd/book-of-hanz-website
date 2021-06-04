import * as React from 'react';
import tw, { styled } from 'twin.macro';
import hanzTitle from '../images/hanzTitle.svg';
import hanzBkg from '../images/hanz-pattern.png';

const HeroWrapper = styled.header`
  ${tw`block py-2 md:py-5 px-2 md:px-10`}
`;

const Box = styled.div`
  background: url(${hanzBkg}) center center repeat-x;
  background-size: contain;
  margin: 0 auto;
  box-shadow: 0 1.1px 0.9px 0 rgba(0, 0, 0, 0.06),
    0 2.7px 2.1px 0 rgba(0, 0, 0, 0.08), 0 5.1px 4px 0 rgba(0, 0, 0, 0.1),
    0 9px 7.2px 0 rgba(0, 0, 0, 0.13), 0 16.9px 13.5px 0 rgba(0, 0, 0, 0.15),
    0 40.4px 32.3px 0 rgba(0, 0, 0, 0.21);
  ${tw`flex flex-col justify-center my-auto p-5 md:p-9 pb-7 md:pb-14 relative z-10`}

  &::after {
    content: '';
    border: 1px solid rgba(255, 255, 255, 0.6);
    top: 0.5rem;
    right: 0.5rem;
    bottom: 0.5rem;
    left: 0.5rem;
    ${tw`absolute`}
  }
`;

const Title = styled.h1`
  ${tw`text-center`}
`;

const Links = styled.ul`
  gap: 1rem;
  ${tw`list-none flex flex-row justify-center mt-3`}
`;

const Button = styled.a`
  ${tw`text-sm md:text-base text-gray-700 font-bold rounded bg-yellow-400 hover:bg-yellow-300 w-max px-3 md:px-6 py-2 md:py-4 uppercase z-10 relative`}
`;

const Image = styled.img`
  margin: 0 auto;
  min-width: 60%;
  max-width: 1000px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 900px;
  }
`;

const Hero = () => (
  <HeroWrapper>
    <Box>
      <Title>
        <Image src={hanzTitle} alt="The Book of Hanz for the Fate RPG" />
      </Title>
      <Links>
        <li>
          <Button href="https://fate-srd.com/store">Buy the Book</Button>
        </li>
      </Links>
    </Box>
  </HeroWrapper>
);

export default Hero;
