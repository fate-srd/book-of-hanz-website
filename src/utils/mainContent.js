import tw, { styled } from 'twin.macro';

const MainContent = styled.main`
  h1 {
    ${tw`text-fateBlue-dark font-bold text-2xl md:text-4xl mt-9 mb-4`}
  }
  h1 + p,
  h2 + p {
    text-indent: 0; 
  }
  h2 {
    ${tw`font-semibold text-xl mt-5 mb-2`}
  }
  p {
    text-indent: 2rem;
    ${tw`text-sm md:text-lg md:leading-7 md:text-justify`}
  }
  ol {
    ${tw`list-decimal text-lg leading-7 pl-14`}
  } 
  ul {
    ${tw`list-disc text-lg leading-7 pl-14`}
  }
  .conversation p {
    text-indent: 0;
    ${tw`mb-2`}
  }
`;

export default MainContent;
