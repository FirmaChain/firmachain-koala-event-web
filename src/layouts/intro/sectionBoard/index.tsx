import React from 'react';

import {
  Container,
  BackgroundWrapper,
  BackgroundGrass,
  Fance,
  SubCharacterImage,
  NinjaCharacterImage,
  Wrapper,
  NinjaCharacter2Image,
  TreeImage,
  PoweredFirma,
} from './styles';

const SectionBoard = () => {
  return (
    <Container>
      <Fance />
      <Wrapper>
        <NinjaCharacterImage />
        <NinjaCharacter2Image />
        <TreeImage />
        <PoweredFirma />

        <SubCharacterImage />
      </Wrapper>
      <BackgroundWrapper>
        <BackgroundGrass />
      </BackgroundWrapper>
    </Container>
  );
};

export default React.memo(SectionBoard);
