import * as React from 'react';
import tw, { styled } from 'twin.macro';
import pattern from '../images/pattern.png';

const HeaderContainer = styled.header`
  ${tw`relative bg-gradient-to-br from-fateBlue to-fateBlue-darker h-screen text-white font-bold text-center`}
`;

const ImageWrapper = styled.div`
  background-image: url(${pattern});
  ${tw`absolute inset-0 p-8`}
`;

const Rule = tw.div`
h-full border-2 border-white border-solid flex flex-col flex-nowrap justify-center z-10
`;

const BookOfHanz = tw.h1`
text-2xl md:text-4xl uppercase font-black uppercase tracking-widest z-50 text-shadow-xl relative mb-3
`;

const BookOfHanzSpan = tw.span`
text-7xl md:text-9xl block font-black tracking-normal
`;

const Subhead = tw.p`
font-bold text-lg md:text-xl text-shadow-xl
`;

const KickstarterButton = tw.a`
bg-white text-black rounded inline-block bg-yellow-200 w-max px-5 py-2 mx-auto mt-9 hover:bg-yellow-400
`;

// markup
const Header = () => (
  <HeaderContainer>
    <ImageWrapper>
      <Rule>
        <BookOfHanz>
          The Book of <BookOfHanzSpan>Hanz</BookOfHanzSpan>
        </BookOfHanz>
        <Subhead>
          The quintessential guide to running the Fate Roleplaying Game.
        </Subhead>
        <KickstarterButton href="https://www.kickstarter.com/projects/amazingrando/the-book-of-hanz-for-the-fate-rpg-zinequest-3">
          Currently on Kickstarter
        </KickstarterButton>
      </Rule>
    </ImageWrapper>
  </HeaderContainer>
);

export default Header;
