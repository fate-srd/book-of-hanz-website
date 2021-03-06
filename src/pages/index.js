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
text-2xl md:text-5xl uppercase font-black uppercase tracking-wide z-50 text-shadow-xl relative mb-5
`;

const BookOfHanzSpan = tw.span`
text-7xl md:text-9xl block font-black tracking-normal
`;

const Subhead = styled.p`
  max-width: 500px;
  ${tw`font-bold text-lg md:text-2xl text-shadow-xl mx-auto`}
`;

const Btn = tw.a`
text-gray-700 rounded inline-block bg-yellow-400 hover:bg-yellow-300 w-max px-6 py-4 mx-auto mt-9 
`;

const IndexPage = () => (
  <div className="font-sans">
    <HeaderContainer>
      <ImageWrapper>
        <Rule>
          <BookOfHanz>
            The Book of <BookOfHanzSpan>Hanz</BookOfHanzSpan>
          </BookOfHanz>
          <Subhead>
            The quintessential guide to running the Fate Roleplaying Game.
          </Subhead>
          <Btn href="https://www.kickstarter.com/projects/amazingrando/the-book-of-hanz-for-the-fate-rpg-zinequest-3">
            Book of Hanz
          </Btn>
          <Btn href="https://www.kickstarter.com/projects/amazingrando/the-book-of-hanz-for-the-fate-rpg-zinequest-3">
            Apocrypha of Hanz
          </Btn>
        </Rule>
      </ImageWrapper>
    </HeaderContainer>
  </div>
);

export default IndexPage;
