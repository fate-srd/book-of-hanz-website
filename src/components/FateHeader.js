import * as React from 'react';
import tw, { styled } from 'twin.macro';
import FateLogo from '../images/fate-srd-logo.svg';
import NavPrimary from './Nav';

const FateWrapper = styled.div`
  ${tw`bg-fateBlue-dark pt-3 md:pt-5 z-10 relative`} 
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.21), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.150959), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.125183), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.105), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0848175), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0590406);
`;

const FateLogoImg = styled.img` 
  max-width: 150px;
  ${tw`mt-0 mb-3 md:mb-5 mx-4 md:mx-10`} 

  @media (min-width: 768px) {
    max-width: 200px;
  }
`

const FateHeader = () => (
  <FateWrapper>
    <FateLogoImg
      src={FateLogo}
      alt="Fate SRD"
    />
    <NavPrimary />
  </FateWrapper>
);

export default FateHeader; 
