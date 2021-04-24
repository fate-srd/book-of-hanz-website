import * as React from 'react';
import tw, { styled } from 'twin.macro';
import heroImage from '../images/heroimage.png'

const HeroWrapper = styled.header`
  display: block;
  border: 1px solid red;
`;

const BuyNow = styled.a`
${tw`text-lg text-gray-700 font-bold rounded bg-yellow-400 hover:bg-yellow-300 w-max px-6 py-4 mx-auto mt-5 uppercase z-10 relative`}
`

const Image = styled.img`
max-width: 1200px;
`

const Hero = () => (
  <HeroWrapper>
    <h1>
      <Image src={heroImage} alt="The Book of Hanz for the Fate RPG" />
    </h1>
    <BuyNow href="#footer">Buy In Print $14</BuyNow>
  </HeroWrapper>
);

export default Hero;
