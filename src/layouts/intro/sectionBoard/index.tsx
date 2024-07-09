import React from 'react';

import {
  Container,
  BackgroundWrapper,
  BackgroundGrass,
  Fance,
  SubCharacterImage,
  NinjaCharacterImage,
  Wrapper,
  PoweredFirma,
  MissionBoardImage,
  BirdImage,
} from './styles';

const SectionBoard = () => {
  return (
    <Container>
      <Fance />
      <Wrapper>
        <MissionBoardImage />
        <BirdImage />
        <NinjaCharacterImage />
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
