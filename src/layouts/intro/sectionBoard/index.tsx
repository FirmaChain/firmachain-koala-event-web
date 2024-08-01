import React from 'react';

import useScreen from '../../../hooks/useScreen';
import { FIRMACHAIN_URL } from '../../../constants/common';

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
  SubCharacterMobileImage,
  SignWoodMobileImage,
} from './styles';

const SectionBoard = () => {
  const { isSmall } = useScreen();

  return (
    <Container>
      <Fance />
      <Wrapper>
        {isSmall ? (
          <React.Fragment>
            <SubCharacterMobileImage />
            <SignWoodMobileImage onClick={() => window.open(FIRMACHAIN_URL)} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <MissionBoardImage />
            <BirdImage />
            <NinjaCharacterImage />
            <PoweredFirma />
            <SubCharacterImage />
          </React.Fragment>
        )}
      </Wrapper>
      <BackgroundWrapper>
        <BackgroundGrass />
      </BackgroundWrapper>
    </Container>
  );
};

export default React.memo(SectionBoard);
